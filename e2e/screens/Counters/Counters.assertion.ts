import { expect } from 'detox'
import { getWithAncestor, isIos, shouldBeVisible } from 'e2e/helpers'
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
    by.type(isIos() ? 'RCTTextView' : 'android.widget.TextView'),
    by.label(`${counter.toLowerCase()}CounterLabel`)
  ).atIndex(1)
  await expect(selector).toHaveText(value)
}
