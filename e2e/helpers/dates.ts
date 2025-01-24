import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'

export const getCurrentYear = () => new Date().getFullYear()

export const getRandomTime = () => dayjs(faker.date.soon()).format('HH:mm')

export const convertDateToDashedFormat = (dateString: string) =>
  dayjs(dateString).format('DD-MM-YYYY')
