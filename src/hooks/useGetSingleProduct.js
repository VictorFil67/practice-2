import { getSingleProduct } from 'API/products'
import Notiflix from 'notiflix'
import { useEffect, useState } from 'react'

const useGetSingleProduct = id => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(true)
        const data = await getSingleProduct(id)
        setProduct(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    id && getProduct()
  }, [id])

  useEffect(() => {
    error && Notiflix.Notify.failure(error)
  }, [error])

  return { isLoading, product }
}

export default useGetSingleProduct
