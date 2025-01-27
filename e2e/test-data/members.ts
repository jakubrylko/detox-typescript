import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import { getCurrentYear, getRandomTime } from 'e2e/helpers'
import { countryList } from '../../src/data'

const { date, helpers, internet, location, person } = faker

export const createMember = () => {
  const minBirthYear = getCurrentYear() - 19
  const randomDateOfBirth = date.between({
    from: '1980-01-01',
    to: `${minBirthYear}-12-31`
  })
  const randomStartDate = date.future()

  return {
    name: person.firstName(),
    surname: person.lastName(),
    dateOfBirth: dayjs(randomDateOfBirth).format('DD-MM-YYYY'),
    startDay: date.weekday(),
    email: internet.email(),
    addressOne: location.streetAddress(),
    addressTwo: location.secondaryAddress(),
    city: location.city(),
    postCode: location.zipCode(),
    country: helpers.arrayElement(countryList.slice(1)),
    startDate: dayjs(randomStartDate).format('D MMMM YYYY'),
    startTime: getRandomTime()
  }
}
