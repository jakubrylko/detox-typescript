import { getByText, launchApp, shouldBeVisible } from 'e2e/helpers'

describe('Starter', () => {
  beforeEach(async () => {
    await launchApp()
  })

  it('Home screen should be visible', async () => {
    await shouldBeVisible(getByText('Counters'))
  })
})
