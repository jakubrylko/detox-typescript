import {
  getById,
  getByText,
  scrollUntilVisible,
  shouldBeVisible
} from 'e2e/helpers'

export const assertCountryList = async (
  list: CountryList,
  countries: string[]
) => {
  const scrollMatcher = by.id(`horizontalScroll-${list}`)

  for (const country of countries) {
    await scrollUntilVisible(getByText(country), scrollMatcher, {
      direction: 'right'
    })

    await shouldBeVisible([
      getByText(list),
      getByText(country),
      getById(`image-${country}`)
    ])
  }
}
