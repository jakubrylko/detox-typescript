import { expect } from 'detox'
import {
  convertDateToDashedFormat,
  getByText,
  isIos,
  shouldBeVisible
} from 'e2e/helpers'
import { memberField, memberFullName } from '.'

export const assertEmptyScreen = async () =>
  await shouldBeVisible(getByText('No members added in the list'))

export const assertMember = async (member: Record<string, string>) => {
  const { name, surname } = member
  await expect(memberFullName).toHaveText(`${name} ${surname}`)
}

export const assertMemberDetails = async (member: Record<string, string>) => {
  await expect(memberField('Name')).toHaveText(member.name)
  await expect(memberField('Surname')).toHaveText(member.surname)
  isIos() &&
    (await expect(memberField('Date of Birth')).toHaveText(member.dateOfBirth))
  await expect(memberField('Start Day')).toHaveText(member.startDay)
  await expect(memberField('Email')).toHaveText(member.email)

  await expect(memberField('Address Line One')).toHaveText(member.addressOne)
  await expect(memberField('Address Line Two')).toHaveText(member.addressTwo)
  await expect(memberField('City')).toHaveText(member.city)
  await expect(memberField('Postcode')).toHaveText(member.postCode)
  await expect(memberField('Country')).toHaveText(member.country)

  const dashedDate = convertDateToDashedFormat(member.startDate)
  await expect(memberField('Start Date')).toHaveText(dashedDate)
  await expect(memberField('Start Time')).toHaveText(member.startTime)
}
