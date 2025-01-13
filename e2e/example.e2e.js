describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Home screen should be visible', async () => {
    await expect(element(by.text('Counters'))).toBeVisible()
  })
})
