import * as Header from 'e2e/components/Header'
import { launchApp, scrollUntilVisible } from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'
import * as Members from 'e2e/screens/Members'

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
    await scrollUntilVisible(Members.startDateField, Members.scrollView)
    await Members.startDateField.tap()
  })
})
