import { auth } from './api'

export async function signUp(body) {
  const { data } = await auth.post('/auth/signup', body)
  return data
}
export async function signIn(body) {
  const { data } = await auth.post('/auth/login', body)
  return data
}
