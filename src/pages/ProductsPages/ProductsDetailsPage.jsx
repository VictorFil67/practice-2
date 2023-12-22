import DetailsProduct from 'components/Product/DetailsProduct'
import useGetSingleProduct from 'hooks/useGetSingleProduct'
import { useParams } from 'react-router-dom'

const ProductsDetailsPage = () => {
  const { id } = useParams()
  const { isLoading, product } = useGetSingleProduct(id)

  return (
    <>
      {isLoading && <h1>Loading...</h1>}

      {product && <DetailsProduct product={product} />}
      {/* {product && <Product product={product} single />} */}
    </>
  )
}

export default ProductsDetailsPage
