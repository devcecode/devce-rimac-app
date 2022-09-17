export const getUser = async () => {
  const URI = 'https://jsonplaceholder.typicode.com/users'

  const response = await fetch(URI)
  const data     = await response.json()

  return data
}