import { api } from './api'

export async function getUsers(skip, limit, q) {
  const url = q
    ? `/users/search?q=${q}&skip=${skip}&limit=${limit}`
    : `/users?skip=${skip}&limit=${limit}`

  const { data } = await api(url)
  return data
}
