import { expect } from 'detox'
import { getByText, shouldBeVisible } from 'e2e/helpers'
import { memberFullName } from '.'

export const assertEmptyScreen = async () =>
  await shouldBeVisible(getByText('No members added in the list'))

export const assertNewMember = async (newMember: Record<string, string>) => {
  const { name, surname } = newMember
  await expect(memberFullName).toHaveText(`${name} ${surname}`)
}
