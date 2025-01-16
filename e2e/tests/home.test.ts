import * as BottomBar from 'e2e/components/BottomBar'
import { isIos, launchApp } from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'

describe('Home screen', () => {
  beforeEach(async () => {
    await launchApp()
    await Home.countersBtn.tap()
  })

  it('Home menu and bottom bar', async () => {
    await Home.assertMenu()
    await BottomBar.assertIcons()
    isIos() && (await Home.assertOrderOfMenuElements())
  })
})
