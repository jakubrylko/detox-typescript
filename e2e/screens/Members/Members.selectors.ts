import { getById } from 'e2e/helpers'
import { removeSpaces } from '../../../src/utils'

export const calendarRightArrow = getById('calendar.header.rightArrow')
export const deleteMemberBtn = getById('deleteMemberBtn')
export const formPicker = getById('formPicker')
export const member = getById('memberList-member')
export const memberFullName = getById('memberList-fullName')
export const saveMemberBtn = getById('saveMemberBtn')

export const formField = (field: FormField) =>
  getById(`formField-${removeSpaces(field)}`)

export const memberField = (field: FormField) =>
  getById(`memberField-${removeSpaces(field)}`)
