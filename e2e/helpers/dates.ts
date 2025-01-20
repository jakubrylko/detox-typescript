import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'

export const getCurrentYear = () => new Date().getFullYear()

export const getRandomTime = () => {
  const randomDate = faker.date.soon({ days: 7 })
  const hour = String(randomDate.getHours()).padStart(2, '0')
  const minutes = String(randomDate.getMinutes()).padStart(2, '0')
  return `${hour}:${minutes}`
}

export const convertDateToDashedFormat = (dateString: string) =>
  dayjs(dateString).format('DD-MM-YYYY')
