import { assertTabBar } from 'e2e/components/TabBar'
import { launchApp } from 'e2e/helpers'
import { assertHomeMenu } from 'e2e/screens/Home'

describe('Home screen', () => {
  beforeEach(async () => {
    await launchApp()
  })

  it('Home screen menu should be visible', async () => {
    await assertHomeMenu()
  })

  it('Tab bar should be visible', async () => {
    await assertTabBar()
  })
})
