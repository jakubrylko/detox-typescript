import { shouldBeVisible } from 'e2e/helpers'
import { citiesIcon, homeIcon, membersIcon } from '.'

export const assertIcons = async () =>
  await shouldBeVisible([homeIcon, citiesIcon, membersIcon])
