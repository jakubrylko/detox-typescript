import fetch from 'cross-fetch'

const isJSON = (response: Response) =>
  response.headers.get('content-type')?.includes('application/json')

const handleError = async (response: Response) => {
  if (!response.ok) {
    const error = isJSON(response)
      ? await response.json()
      : await response.text()

    throw new Error(`\x1b[31m${error}\x1b[0m`)
  }
}

export const makeRequest = async (
  method: Methods,
  endpoint: string,
  body?: Record<string, unknown>
) => {
  const url = 'http://localhost:8081' + endpoint

  const response = await fetch(url, { method, body: JSON.stringify(body) })
  await handleError(response)

  return isJSON(response)
    ? response.json()
    : `Request successful with status: ${response.status}`
}
