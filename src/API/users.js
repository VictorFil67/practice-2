import { api } from './api'

export async function getUsers(skip, limit) {
  const { data } = await api(`/users?skip=${skip}&limit=${limit}`)
  return data
}
