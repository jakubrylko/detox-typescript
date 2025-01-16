import { getText, getWithAncestor, shouldBeVisible } from 'e2e/helpers'
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

// Works only on iOS
export const assertOrderOfMenuElements = async () => {
  const expectedOrder = [
    'Counters',
    'Member List',
    'Cities',
    'Animation',
    'Extras'
  ]

  const actualOrder = []
  const selector = getWithAncestor(by.type('RCTTextView'), by.id('homeMenu'))
  for (let i = 0; i < expectedOrder.length; i++) {
    const buttonText = await getText(selector, { index: i })
    actualOrder.push(buttonText)
  }

  jestExpect(actualOrder).toEqual(expectedOrder)
}
