import * as Picker from 'e2e/components/Picker'
import { getByText, isElementVisible, isIos } from 'e2e/helpers'
import { androidListView } from 'e2e/shared'
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
    await Picker.datePicker.setDatePickerDate(dateOfBirth, 'DD-MM-YYYY')
    await Picker.dateConfirmBtn.tap()
  } else {
    await Picker.selectRandomYear(dateOfBirth)
    await Picker.selectRandomMonth()
    await Picker.selectRandomDay()
    await getByText('OK').tap()
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
}

export const setStartDate = async (startDate: string) => {
  const [day, month, year] = startDate.split(' ')

  await startDateField.tap()
  await element(scrollView).swipe('up')

  while (!(await isElementVisible(getByText(`${month} ${year}`)))) {
    await calendarRightArrow.tap()
  }

  await getByText(day).tap()
}

export const setStartTime = async (startTime: string) => {
  const [hour, minutes] = startTime.split(' ')

  await startTimeField.tap()
  await element(scrollView).swipe('up')

  if (isIos()) {
    await Picker.timePicker.setDatePickerDate(`${hour}:${minutes}`, 'HH:mm')
    await Picker.timeConfirmBtn.tap()
  } else {
    // Add Android and assertions ?
  }
}
