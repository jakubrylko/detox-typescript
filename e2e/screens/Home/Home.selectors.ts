import { getByText, getWithAncestor } from 'e2e/helpers'

export const animationBtn = getByText('Animation')
export const citiesBtn = getWithAncestor(by.text('Cities'), by.id('homeMenu'))
export const countersBtn = getByText('Counters')
export const extrasBtn = getByText('Extras')
export const memberListBtn = getByText('Member List')
