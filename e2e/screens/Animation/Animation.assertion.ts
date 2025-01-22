import { shouldBeVisible } from 'e2e/helpers'
import { animationImage, animationSwitch } from '.'

export const assertScreen = async () =>
  await shouldBeVisible([animationImage, animationSwitch])
