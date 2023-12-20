import { api } from './api'

export async function getUsers(skip, limit, q) {
  const url = q
    ? `/us1ers/search?q=${q}&skip=${skip}&limit=${limit}`
    : `/us1ers?skip=${skip}&limit=${limit}`

  const { data } = await api(url)
  return data
}
