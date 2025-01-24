import * as Header from 'e2e/components/Header'
import {
  getByText,
  launchApp,
  shouldBeVisible,
  shouldNotBeVisible
} from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'
import * as Members from 'e2e/screens/Members'
import { createMember } from 'e2e/test-data/members'

describe('Members list', () => {
  beforeAll(async () => {
    await launchApp()
  })

  it('Add, edit, delete member', async () => {
    await Home.memberListBtn.tap()
    await Members.assertEmptyScreen()

    const newMember = createMember()
    await Header.addMemberBtn.tap()
    await Members.fillAddMemberForm(newMember)
    await Members.assertMember(newMember)
    await Members.member.tap()
    await Members.assertMemberDetails(newMember)

    const updatedMember = createMember()
    await Header.editMemberBtn.tap()
    await Members.fillAddMemberForm(updatedMember)
    await Members.assertMemberDetails(updatedMember)
    await Header.backBtn.tap()
    await Members.assertMember(updatedMember)

    await Members.deleteMemberBtn.tap()
    await getByText('NO').tap()
    await shouldBeVisible(Members.member)
    await Members.deleteMemberBtn.tap()
    await getByText('YES').tap()
    await shouldNotBeVisible(Members.member)
  })
})
