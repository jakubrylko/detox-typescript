import { expect } from 'detox'
import * as Picker from 'e2e/components/Picker'
import {
  convertMonthNameToNumber,
  getByText,
  getText,
  isElementVisible,
  isIos,
  replaceAndSubmit
} from 'e2e/helpers'
import { androidListView } from 'e2e/shared'
import jestExpect from 'expect'
import {
  calendarRightArrow,
  countryField,
  dateOfBirthField,
  formPicker,
  scrollView,
  startDateField,
  startDayField,
  startTimeField
} from '.'

export const setDateOfBirth = async (dateOfBirth: string) => {
  await dateOfBirthField.tap()

  if (isIos()) {
    await Picker.datePicker.setDatePickerDate(dateOfBirth, 'dd-MM-yyyy')
    await Picker.dateConfirmBtn.tap()

    await expect(dateOfBirthField).toHaveText(dateOfBirth)
  } else {
    await Picker.selectRandomYear(dateOfBirth)
    await Picker.selectRandomMonth()
    await Picker.selectRandomDay()
    await getByText('OK').tap()

    // Assert that the selected date of birth matches 'DD-MM-YYYY' format
    const selectedDate = await getText(dateOfBirthField)
    jestExpect(selectedDate).toMatch(/^\d{2}-\d{2}-\d{4}$/)
  }
}

export const setStartDay = async (day: string) => {
  await startDayField.tap()

  if (isIos()) {
    await formPicker.setColumnToValue(0, day)
  } else {
    await formPicker.tap()
    await getByText(day).tap()
  }

  await expect(startDayField).toHaveText(day)
}

export const selectCountry = async (country: string) => {
  await countryField.tap()

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

  await expect(countryField).toHaveText(country)
}

export const setStartDate = async (startDate: string) => {
  const [day, month, year] = startDate.split(' ')
  const monthNumber = convertMonthNameToNumber(startDate)

  await startDateField.tap()
  await element(scrollView).swipe('up')

  while (!(await isElementVisible(getByText(`${month} ${year}`)))) {
    await calendarRightArrow.tap()
  }

  await getByText(day).tap()
  await expect(startDateField).toHaveText(
    `${day.padStart(2, '0')}-${monthNumber}-${year}`
  )
}

export const setStartTime = async (startTime: string) => {
  const [hour, minutes] = startTime.split(':')
  await startTimeField.tap()

  if (isIos()) {
    await Picker.timePicker.setDatePickerDate(startTime, 'HH:mm')
    await element(scrollView).swipe('up')
    await Picker.timeConfirmBtn.tap()
  } else {
    await replaceAndSubmit(Picker.hourPicker, hour)
    await replaceAndSubmit(Picker.minutesPicker, minutes)
    await getByText('OK').tap()
  }

  await expect(startTimeField).toHaveText(startTime)
}
