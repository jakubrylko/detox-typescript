import * as Header from 'e2e/components/Header'
import { launchApp, scrollUntilVisible, typeAndSubmit } from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'
import * as Members from 'e2e/screens/Members'
import { newMember } from 'e2e/test-data/new-members'

describe('Members list', () => {
  beforeEach(async () => {
    await launchApp()
    await Home.memberListBtn.tap()
  })

  it('Empty members list', async () => {
    await Members.assertEmptyScreen()
  })

  it('Add new member', async () => {
    await Header.addMemberBtn.tap()

    await typeAndSubmit(Members.nameField, newMember.name)
    await typeAndSubmit(Members.surnameField, newMember.surname)

    await Members.setDateOfBirth(newMember.dateOfBirth)
    await Members.setStartDay(newMember.startDay)

    await typeAndSubmit(Members.emailField, newMember.email)
    await scrollUntilVisible(Members.addressOneField, Members.scrollView)
    await typeAndSubmit(Members.addressOneField, newMember.addressOne)
    await scrollUntilVisible(Members.addressTwoField, Members.scrollView)
    await typeAndSubmit(Members.addressTwoField, newMember.addressTwo)

    await element(Members.scrollView).swipe('up')
    await typeAndSubmit(Members.cityField, newMember.city)
    await typeAndSubmit(Members.postCodeField, newMember.postCode)
    await Members.selectCountry(newMember.country)

    await Members.setStartDate(newMember.startDate)
    await Members.setStartTime(newMember.startTime)

    await scrollUntilVisible(Members.saveMemberBtn, Members.scrollView)
    await Members.saveMemberBtn.tap()
    await Members.assertNewMember(newMember)
  })
})
