import { api } from './api'

export async function getProducts(skip, limit, query) {
  const url = query
    ? `/products/search?q=${query}&skip=${skip}&limit=${limit}`
    : `/products?skip=${skip}&limit=${limit}`

  const { data } = await api(url)
  return data
}

export async function addProduct(body) {
  const { data } = await api.post('/products/add', body)
  return data
}

export async function getSingleProduct(id) {
  const { data } = await api(`/products/${id}`)
  return data
}
