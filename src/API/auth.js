import { auth, setToken } from './api'

export async function signUp(body) {
  const { data } = await auth.post('/auth/signup', body)
  setToken(data.token)
  return data
}
export async function signIn(body) {
  const { data } = await auth.post('/auth/login', body)
  setToken(data.token)
  return data
}
export async function refresh() {
  const token = localStorage.getItem('persist:auth')
  console.log(token)

  const { data } = await auth.get('/auth/refresh')

  return data
}
