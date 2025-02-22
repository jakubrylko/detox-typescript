import { faker } from '@faker-js/faker'
import { getByText, getText, isElementVisible } from 'e2e/helpers'
import { androidImageBtn, androidListView, androidViewPager } from 'e2e/shared'
import { datePickerText } from '.'

export const selectYear = async (dateOfBirth: string) => {
  const targetYear = dateOfBirth.slice(-4)
  const selectedYear = (await getText(datePickerText)) || ''
  const swipeDirection =
    Number(targetYear) > Number(selectedYear) ? 'up' : 'down'

  await getByText(selectedYear).tap()
  while (!(await isElementVisible(getByText(targetYear)))) {
    await androidListView.swipe(swipeDirection, 'slow', 0.3)
  }

  try {
    await getByText(targetYear).tap()
  } catch {
    await androidListView.swipe(swipeDirection, 'slow', 0.1)
    await getByText(targetYear).tap()
  }
}

export const selectRandomMonth = async () => {
  const randomNumber = faker.number.int({ min: 1, max: 10 })
  await androidImageBtn.atIndex(0).multiTap(randomNumber)
}

export const selectRandomDay = async () =>
  await androidViewPager.tap({ x: 150, y: 200 })
