import * as BottomBar from 'e2e/components/BottomBar'
import { getByText, launchApp, shouldBeVisible } from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'
import * as Members from 'e2e/screens/Members'
import { europe } from '../../src/data'

describe('Home screen', () => {
  beforeEach(async () => {
    await launchApp()
  })

  it('Home menu', async () => {
    await Home.assertMenu()
    await Home.assertOrderOfMenuElements()
  })

  it('Bottom bar', async () => {
    await BottomBar.assertIcons()
    await BottomBar.tapOnIcon('Cities')
    await shouldBeVisible(getByText(europe[0].name))

    await BottomBar.tapOnIcon('Home')
    await Home.assertMenu()

    await BottomBar.tapOnIcon('Members')
    await Members.assertEmptyScreen()

    await BottomBar.tapOnIcon('Home')
    await Home.assertMenu()
  })
})
