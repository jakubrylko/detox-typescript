import {
  getByText,
  launchApp,
  scrollUntilVisible,
  shouldBeVisible
} from 'e2e/helpers'
import * as Home from 'e2e/screens/Home'
import { europe } from '../../src/data'

describe('Cities', () => {
  beforeEach(async () => {
    await launchApp()
  })

  it('City lists', async () => {
    await Home.citiesBtn.tap()

    const imagesHorizontalScroll = by.id('images-horizontalScroll-Europe')

    for (const country of europe) {
      const selector = getByText(country.name)
      await scrollUntilVisible(selector, imagesHorizontalScroll, {
        visibility: 100,
        direction: 'right'
      })
      await shouldBeVisible(selector)
    }
  })
})
