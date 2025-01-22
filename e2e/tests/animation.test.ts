import * as Header from 'e2e/components/Header'
import { launchApp, toggleShouldBeOff, toggleShouldBeOn } from 'e2e/helpers'
import * as Animation from 'e2e/screens/Animation'
import * as Home from 'e2e/screens/Home'

describe('Animation', () => {
  beforeEach(async () => {
    await launchApp()
  })

  it('Toggle animation', async () => {
    await Home.animationBtn.tap()
    await Animation.assertScreen()

    await toggleShouldBeOff(Animation.animationSwitch)
    await device.disableSynchronization()
    await Animation.animationSwitch.tap()

    await toggleShouldBeOn(Animation.animationSwitch)
    await Animation.animationSwitch.tap()
    await device.enableSynchronization()

    await toggleShouldBeOff(Animation.animationSwitch)
    await Header.backBtn.tap()
    await Home.assertMenu()
  })
})
