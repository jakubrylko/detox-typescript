import * as Header from 'e2e/components/Header'
import { launchApp } from 'e2e/helpers'
import * as Cities from 'e2e/screens/Cities'
import * as Home from 'e2e/screens/Home'
import { asia, europe, usacanada } from '../../src/data'

describe('Cities', () => {
  beforeEach(async () => {
    await launchApp()
  })

  it('City lists', async () => {
    await Home.citiesBtn.tap()

    const europeNames = europe.map((city) => city.name)
    await Cities.assertCountryList('Europe', europeNames)

    const americaNames = usacanada.map((city) => city.name)
    await Cities.assertCountryList('USA / Canada', americaNames)

    await Cities.imagesScroll.swipe('up')
    const asiaNames = asia.map((city) => city.name)
    await Cities.assertCountryList('Asia', asiaNames)

    await Header.backBtn.tap()
    await Home.assertMenu()
  })
})
