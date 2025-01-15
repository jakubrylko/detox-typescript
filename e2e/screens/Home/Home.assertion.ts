import { shouldBeVisible } from 'e2e/helpers'
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
