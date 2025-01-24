import * as Header from 'e2e/components/Header'
import {
  editAndSubmit,
  getById,
  getByText,
  launchApp,
  scrollUntilVisible,
  shouldBeVisible,
  shouldNotBeVisible,
  typeAndSubmit
} from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'
import * as Members from 'e2e/screens/Members'
import { formField } from 'e2e/screens/Members'
import { createMember } from 'e2e/test-data/members'

describe('Members list', () => {
  beforeEach(async () => {
    await launchApp({ newInstance: false })
    try {
      await Home.memberListBtn.tap()
    } catch {
      console.log('No members button')
    }
  })

  afterAll(async () => {
    await Header.backBtn.tap()
    await Home.assertMenu()
  })

  xit('Empty members list', async () => {
    await Members.assertEmptyScreen()
  })

  it('Add new member', async () => {
    const newMember = createMember()
    await Header.addMemberBtn.tap()

    // await typeAndSubmit(formField('Name'), newMember.name)
    await typeAndSubmit(getById('formField-Name'), newMember.name)
    await typeAndSubmit(formField('Surname'), newMember.surname)
    await Members.setDateOfBirth(newMember.dateOfBirth)
    await Members.setStartDay(newMember.startDay)

    await typeAndSubmit(formField('Email'), newMember.email)
    await scrollUntilVisible(
      formField('Address Line One'),
      Members.memberFormScroll
    )
    await typeAndSubmit(formField('Address Line One'), newMember.addressOne)
    await scrollUntilVisible(
      formField('Address Line Two'),
      Members.memberFormScroll
    )
    await typeAndSubmit(formField('Address Line Two'), newMember.addressTwo)

    await element(Members.memberFormScroll).swipe('up')
    await typeAndSubmit(formField('City'), newMember.city)
    await typeAndSubmit(formField('Postcode'), newMember.postCode)
    await Members.selectCountry(newMember.country)

    await Members.setStartDate(newMember.startDate)
    await Members.setStartTime(newMember.startTime)

    await scrollUntilVisible(Members.saveMemberBtn, Members.memberFormScroll)
    await Members.saveMemberBtn.tap()
    await Members.assertMember(newMember)

    await Members.member.tap()
    await Members.assertMemberDetails(newMember)
  })

  xit('Edit member', async () => {
    const updatedMember = createMember()
    await shouldBeVisible(Members.member)
    await Members.member.tap()

    await Header.editMemberBtn.tap()
    await editAndSubmit(formField('Name'), updatedMember.name)
    await editAndSubmit(formField('Surname'), updatedMember.surname)
    await Members.setDateOfBirth(updatedMember.dateOfBirth)
    await Members.setStartDay(updatedMember.startDay)

    await editAndSubmit(formField('Email'), updatedMember.email)
    await scrollUntilVisible(
      formField('Address Line One'),
      Members.memberFormScroll
    )
    await editAndSubmit(formField('Address Line One'), updatedMember.addressOne)
    await scrollUntilVisible(
      formField('Address Line Two'),
      Members.memberFormScroll
    )
    await editAndSubmit(formField('Address Line Two'), updatedMember.addressTwo)

    await element(Members.memberFormScroll).swipe('up')
    await editAndSubmit(formField('City'), updatedMember.city)
    await editAndSubmit(formField('Postcode'), updatedMember.postCode)
    await Members.selectCountry(updatedMember.country)

    await Members.setStartDate(updatedMember.startDate)
    await Members.setStartTime(updatedMember.startTime)

    await scrollUntilVisible(Members.saveMemberBtn, Members.memberFormScroll)
    await Members.saveMemberBtn.tap()
    await Members.assertMemberDetails(updatedMember)

    await Header.backBtn.tap()
    await Members.assertMember(updatedMember)
  })

  xit('Delete member', async () => {
    await shouldBeVisible(Members.member)
    await Members.deleteMemberBtn.tap()
    await getByText('NO').tap()

    await shouldBeVisible(Members.member)
    await Members.deleteMemberBtn.tap()
    await getByText('YES').tap()
    await shouldNotBeVisible(Members.member)
  })
})
