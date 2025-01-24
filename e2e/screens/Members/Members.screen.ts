import { expect } from 'detox'
import * as Picker from 'e2e/components/Picker'
import {
  convertDateToDashedFormat,
  getByText,
  isElementVisible,
  isIos,
  replaceAndSubmit
} from 'e2e/helpers'
import { androidListView } from 'e2e/shared'
import { calendarRightArrow, formField, formPicker, memberFormScroll } from '.'

export const setDateOfBirth = async (dateOfBirth: string) => {
  await formField('Date of Birth').tap()

  if (isIos()) {
    await Picker.datePicker.setDatePickerDate(dateOfBirth, 'dd-MM-yyyy')
    await Picker.dateConfirmBtn.tap()

    await expect(formField('Date of Birth')).toHaveText(dateOfBirth)
  } else {
    await Picker.selectYear(dateOfBirth)
    await Picker.selectRandomMonth()
    await Picker.selectRandomDay()
    await getByText('OK').tap()

    // Assert that the selected date of birth matches 'DD-MM-YYYY' format
    // const selectedDate = await getText(formField('Date of Birth'))
    // jestExpect(selectedDate).toMatch(/^\d{2}-\d{2}-\d{4}$/)
  }
}

export const setStartDay = async (day: string) => {
  await formField('Start Day').tap()

  if (isIos()) {
    await formPicker.setColumnToValue(0, day)
  } else {
    await formPicker.tap()
    await getByText(day).tap()
  }

  await expect(formField('Start Day')).toHaveText(day)
}

export const selectCountry = async (country: string) => {
  await formField('Country').tap()

  if (isIos()) {
    await formPicker.setColumnToValue(0, country)
  } else {
    await formPicker.tap()
    while (!(await isElementVisible(getByText(country)))) {
      await androidListView.swipe('up', 'slow', 0.7)
    }

    try {
      await getByText(country).tap()
    } catch {
      await androidListView.swipe('up', 'slow', 0.1)
      await getByText(country).tap()
    }
  }

  await expect(formField('Country')).toHaveText(country)
}

export const setStartDate = async (startDate: string) => {
  const [day, month, year] = startDate.split(' ')
  const dashedDate = convertDateToDashedFormat(startDate)

  await formField('Start Date').tap()
  await element(memberFormScroll).swipe('up')

  while (!(await isElementVisible(getByText(`${month} ${year}`)))) {
    await calendarRightArrow.tap()
  }

  await getByText(day).tap()
  await expect(formField('Start Date')).toHaveText(dashedDate)
}

export const setStartTime = async (startTime: string) => {
  const [hour, minutes] = startTime.split(':')
  await formField('Start Time').tap()

  if (isIos()) {
    await Picker.timePicker.setDatePickerDate(startTime, 'HH:mm')
    await element(memberFormScroll).swipe('up')
    await Picker.timeConfirmBtn.tap()
  } else {
    await replaceAndSubmit(Picker.hourPicker, hour)
    await replaceAndSubmit(Picker.minutesPicker, minutes)
    await getByText('OK').tap()
  }

  await expect(formField('Start Time')).toHaveText(startTime)
}
