import { getByText, launchApp, shouldBeVisible } from 'e2e/helpers'

describe('Home screen', () => {
  beforeEach(async () => {
    await launchApp()
  })

  it('Home screen should be visible', async () => {
    await shouldBeVisible([getByText('Counters'), getByText('Extras')])
  })

  xit('Tab bar should be visible', async () => {
    await shouldBeVisible([getByText('Home'), getByText('Cities')])
  })
})
