import { expect } from 'detox'
import { getWithAncestor, shouldBeVisible } from 'e2e/helpers'
import {
  broadbandCounter,
  electricityCounter,
  gasCounter,
  waterCounter
} from '.'

export const assertButtons = async () => {
  await shouldBeVisible([
    waterCounter,
    electricityCounter,
    gasCounter,
    broadbandCounter
  ])
}

export const assertCounterValue = async (
  counter: Counter,
  { value }: { value: string }
) => {
  const selector = getWithAncestor(
    by.id('counterValue'),
    by.label(`${counter.toLowerCase()}CounterLabel`)
  )
  await expect(selector).toHaveText(value)
}
