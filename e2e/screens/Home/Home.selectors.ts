import { getById, getByText, getWithAncestor } from 'e2e/helpers'
import { homeMenu } from './Home.matchers'

export const animationBtn = getByText('Animation')
export const citiesBtn = getWithAncestor(by.text('Cities'), homeMenu)
export const countersBtn = getByText('Counters')
export const extrasBtn = getByText('Extras')
export const homeBtnText = getById('homeButtonText')
export const memberListBtn = getByText('Member List')
