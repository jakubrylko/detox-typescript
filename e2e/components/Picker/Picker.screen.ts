import { faker } from '@faker-js/faker'
import { getByText, getCurrentYear, isElementVisible } from 'e2e/helpers'
import { androidImageBtn, androidListView, androidViewPager } from 'e2e/shared'

export const selectRandomYear = async (dateOfBirth: string) => {
  const defaultYear = String(getCurrentYear() - 18)
  const targetYear = dateOfBirth.slice(-4)

  await getByText(defaultYear).tap()
  while (!(await isElementVisible(getByText(targetYear)))) {
    await androidListView.swipe('down', 'slow', 0.3)
  }

  try {
    await getByText(targetYear).tap()
  } catch {
    await androidListView.swipe('down', 'slow', 0.1)
    await getByText(targetYear).tap()
  }
}

export const selectRandomMonth = async () => {
  const randomNumber = faker.number.int({ min: 1, max: 10 })
  await androidImageBtn.atIndex(0).multiTap(randomNumber)
}

export const selectRandomDay = async () =>
  await androidViewPager.tap({ x: 150, y: 200 })
