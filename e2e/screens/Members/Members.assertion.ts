import { getByText, shouldBeVisible } from 'e2e/helpers'

export const assertEmptyScreen = async () =>
  await shouldBeVisible(getByText('No Members added in the list'))
