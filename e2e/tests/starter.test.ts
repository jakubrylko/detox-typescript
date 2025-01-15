import { expect } from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true })
  })

  it('Home screen should be visible', async () => {
    await expect(element(by.text('Counters'))).toBeVisible()
  })
})
