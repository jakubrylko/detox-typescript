import { faker } from '@faker-js/faker'

export const getCurrentYear = () => new Date().getFullYear()

export const getRandomTime = () => {
  const randomDate = faker.date.soon({ days: 7 })
  const hour = String(randomDate.getHours()).padStart(2, '0')
  const minutes = String(randomDate.getMinutes()).padStart(2, '0')
  return `${hour} ${minutes}`
}
