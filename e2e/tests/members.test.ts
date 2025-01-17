import * as Header from 'e2e/components/Header'
import { launchApp, scrollUntilVisible } from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'
import * as Members from 'e2e/screens/Members'
import { newMember } from 'e2e/test-data/members'

describe('Members list', () => {
  beforeEach(async () => {
    await launchApp()
    await Home.memberListBtn.tap()
  })

  xit('Empty members list', async () => {
    await Members.assertEmptyScreen()
  })

  it('Add new member', async () => {
    await Header.addMemberBtn.tap()

    await Members.nameField.typeText(newMember.name)
    await Members.nameField.tapReturnKey()
    await Members.surnameField.typeText(newMember.surname)
    await Members.surnameField.tapReturnKey()

    await Members.setDateOfBirth(newMember.dateOfBirth)
    await Members.setStartDay(newMember.startDay)

    await Members.emailField.typeText(newMember.email)
    await Members.emailField.tapReturnKey()
    await scrollUntilVisible(Members.addressOneField, Members.scrollView)
    await Members.addressOneField.typeText(newMember.addressOne)
    await Members.addressOneField.tapReturnKey()

    await scrollUntilVisible(Members.addressTwoField, Members.scrollView)
    await Members.addressTwoField.typeText(newMember.addressTwo)
    await Members.addressTwoField.tapReturnKey()

    await element(Members.scrollView).swipe('up')
    await Members.cityField.typeText(newMember.city)
    await Members.cityField.tapReturnKey()
    await Members.postCodeField.typeText(newMember.postCode)
    await Members.postCodeField.tapReturnKey()
    await Members.selectCountry('Cuba')

    await Members.setStartDate(newMember.startDate)
    await Members.setStartTime(newMember.startTime)
  })
})
