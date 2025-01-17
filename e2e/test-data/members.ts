import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import { getRandomTime } from 'e2e/helpers'

const { date, internet, location, person } = faker

const randomDateOfBirth = date.between({ from: '1980-01-01', to: '2005-12-31' })
const randomStartDate = date.future()

export const newMember = {
  name: person.firstName(),
  surname: person.lastName(),
  dateOfBirth: dayjs(randomDateOfBirth).format('DD-MM-YYYY'),
  startDay: date.weekday(),
  email: internet.email(),
  addressOne: location.streetAddress(),
  addressTwo: location.secondaryAddress(),
  city: location.city(),
  postCode: location.zipCode(),
  startDate: dayjs(randomStartDate).format('D MMMM YYYY'),
  startTime: getRandomTime()
}
