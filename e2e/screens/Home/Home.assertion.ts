import { getById, getText, shouldBeVisible } from 'e2e/helpers'
import jestExpect from 'expect'
import {
  animationBtn,
  citiesBtn,
  countersBtn,
  extrasBtn,
  memberListBtn
} from '.'

export const assertMenu = async () => {
  await shouldBeVisible([
    countersBtn,
    memberListBtn,
    citiesBtn,
    animationBtn,
    extrasBtn
  ])
}

export const assertOrderOfMenuElements = async () => {
  const expectedOrder = [
    'Counters',
    'Member List',
    'Cities',
    'Animation',
    'Extras'
  ]

  const actualOrder = []
  for (let i = 0; i < expectedOrder.length; i++) {
    const buttonText = await getText(getById('homeButtonText'), { index: i })
    actualOrder.push(buttonText)
  }

  jestExpect(actualOrder).toEqual(expectedOrder)
}
