import { shouldBeVisible } from 'e2e/helpers'
import { TAB_BAR_CITIES, TAB_BAR_HOME, TAB_BAR_MEMBERS } from '.'

export const assertTabBar = async () =>
  await shouldBeVisible([TAB_BAR_HOME, TAB_BAR_CITIES, TAB_BAR_MEMBERS])
