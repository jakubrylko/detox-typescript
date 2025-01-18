import { getById, getByType } from 'e2e/helpers'

export const dateCancelBtn = getById('datePicker-cancel')
export const dateConfirmBtn = getById('datePicker-confirm')
export const datePicker = getById('datePicker')
export const hourPicker = getByType('android.widget.EditText').atIndex(0)
export const minutesPicker = getByType('android.widget.EditText').atIndex(1)
export const timeCancelBtn = getById('timePicker-cancel')
export const timeConfirmBtn = getById('timePicker-confirm')
export const timePicker = getById('timePicker')
