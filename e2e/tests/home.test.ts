import * as BottomBar from 'e2e/components/BottomBar'
import { launchApp } from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'

describe('Home screen', () => {
  beforeEach(async () => {
    await launchApp()
  })

  it('Home menu and bottom bar', async () => {
    await Home.assertMenu()
    await BottomBar.assertIcons()
    await Home.assertOrderOfMenuElements()
  })
})
