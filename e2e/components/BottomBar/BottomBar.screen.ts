import { getById } from 'e2e/helpers'

export const tapOnIcon = async (icon: NavBarIcon) =>
  await getById(`tabBarIcon-${icon.toLowerCase()}`).atIndex(0).tap()
