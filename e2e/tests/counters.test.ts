import * as Header from 'e2e/components/Header'
import { launchApp } from 'e2e/helpers'
import * as Counters from 'e2e/screens/Counters'
import * as Home from 'e2e/screens/Home'

describe('Counters', () => {
  beforeEach(async () => {
    await launchApp()
    await Home.countersBtn.tap()
    await Counters.assertButtons()
  })

  afterEach(async () => {
    await Header.backBtn.tap()
    await Home.assertMenu()
  })

  it('Water counter', async () => {
    await Counters.assertCounterValue('Water', { value: '0' })
    await Counters.tapOnButton('Water')
    await Counters.assertCounterValue('Water', { value: '1' })
  })

  it('Electricity counter', async () => {
    await Counters.assertCounterValue('Electricity', { value: '0' })
    await Counters.tapOnButton('Electricity', { times: 3 })
    await Counters.assertCounterValue('Electricity', { value: '3' })
  })

  it('Gas counter', async () => {
    await Counters.assertCounterValue('Gas', { value: '0' })
    await Counters.tapOnButton('Gas', { times: 5 })
    await Counters.assertCounterValue('Gas', { value: '5' })
  })

  it('Broadband counter', async () => {
    await Counters.assertCounterValue('Broadband', { value: '0' })
    await Counters.tapOnButton('Broadband', { times: 7 })
    await Counters.assertCounterValue('Broadband', { value: '7' })
  })
})
