import { makeRequest } from 'e2e/helpers'

describe('API', () => {
  it('Get image', async () => {
    const response = await makeRequest('GET', '/assets/src/assets/paris.jpeg')
    console.log(response)
  })
})
