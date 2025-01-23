import { makeRequest } from 'e2e/helpers'

describe('API', () => {
  it('Get asset', async () => {
    await makeRequest('GET', '/assets/src/assets/paris.jpeg')
  })
})
