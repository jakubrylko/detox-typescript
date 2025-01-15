import { getByText, getWithAncestor, shouldBeVisible } from 'e2e/helpers'

export const assertHomeMenu = async () => {
  await shouldBeVisible([
    getByText('Counters'),
    getByText('Member List'),
    getWithAncestor(by.text('Cities'), by.id('homeScreen')),
    getByText('Animation'),
    getByText('Extras')
  ])
}
