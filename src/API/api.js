import axios from 'axios'

export const api = axios.create({ baseURL: 'https://dummyjson.com' })

export const auth = axios.create({ baseURL: 'https://practices-api.vercel.app' })

export function setToken(token) {
  auth.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
export function clearToken() {
  delete auth.defaults.headers.common['Authorization']
}
