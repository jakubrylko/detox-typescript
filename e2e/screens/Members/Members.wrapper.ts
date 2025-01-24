import { scrollUntilVisible } from 'e2e/helpers'
import {
  formField,
  memberFormScroll,
  saveMemberBtn,
  selectCountry,
  setDateOfBirth,
  setStartDate,
  setStartDay,
  setStartTime
} from '.'

export const fillMemberForm = async (member: Record<string, string>) => {
  await formField('Name').replaceText(member.name)
  await formField('Surname').replaceText(member.surname)
  await setDateOfBirth(member.dateOfBirth)
  await setStartDay(member.startDay)

  await formField('Email').replaceText(member.email)
  await scrollUntilVisible(formField('Address Line One'), memberFormScroll)
  await formField('Address Line One').replaceText(member.addressOne)
  await scrollUntilVisible(formField('Address Line Two'), memberFormScroll)
  await formField('Address Line Two').replaceText(member.addressTwo)

  await element(memberFormScroll).swipe('up')
  await formField('City').replaceText(member.city)
  await formField('Postcode').replaceText(member.postCode)
  await selectCountry(member.country)

  await setStartDate(member.startDate)
  await setStartTime(member.startTime)

  await scrollUntilVisible(saveMemberBtn, memberFormScroll)
  await saveMemberBtn.tap()
}
