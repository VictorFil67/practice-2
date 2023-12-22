import Notiflix from 'notiflix'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from 'store/products/thunks'

import FormProductsFilter from 'components/FormProductsFilter/FormProductsFilter'
import FormSearchProducts from 'components/FormSearchProducts/FormSearchProducts'
import ProductsList from 'components/ProductsList/ProductsList'
import { Container } from './ProductsPage.styled'
import { useSearchParams } from 'react-router-dom'
import { changeFilter, changePage } from 'store/products/productsSlice'
import { productsDataSelector, productsSelector } from 'store/products/selectors'

const LIMIT = 10

const ProductsPage = () => {
  //   const products = useSelector(state => state.products.products)
  const { page, isLoading, error, total } = useSelector(productsDataSelector)
  const products = useSelector(productsSelector)
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  const searchQuery = useMemo(() => searchParams.get('search'), [searchParams])
  const filterQuery = useMemo(() => searchParams.get('filter'), [searchParams])

  useEffect(
    function setFilterQueryToRedux() {
      filterQuery ? dispatch(changeFilter(filterQuery)) : dispatch(changeFilter(''))
    },
    [dispatch, filterQuery]
  )

  useEffect(
    function getProductsBySearchOrAllProducts() {
      searchQuery && dispatch(changePage(1))

      const skip = (searchQuery ? 1 : page) * LIMIT - LIMIT

      dispatch(getProductsThunk({ skip, limit: LIMIT, query: searchQuery }))
    },
    [dispatch, page, searchQuery]
  )

  useEffect(
    function showError() {
      error && Notiflix.Notify.failure(error)
    },
    [error]
  )

  const handleLoadMore = () => {
    dispatch(changePage(page + 1))
  }

  return (
    <Container>
      {isLoading && <h1>Loading...</h1>}
      <hr />
      <hr />
      <FormProductsFilter />
      <hr />
      <FormSearchProducts />
      <hr />
      <hr />
      {products && (
        <ProductsList products={products} handleLoadMore={handleLoadMore} total={total} />
      )}
    </Container>
  )
}

export default ProductsPage
