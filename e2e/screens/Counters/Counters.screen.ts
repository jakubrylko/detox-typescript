import { getByLabel } from 'e2e/helpers'

export const tapOnButton = async (button: Counter, { times = 1 } = {}) => {
  for (let i = 0; i < times; i++) {
    await getByLabel(`${button.toLowerCase()}CounterLabel`).tap()
  }
}
