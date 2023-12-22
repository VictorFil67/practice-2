import Product from 'components/Product/Product'

const ProductsList = ({ products, handleLoadMore, total }) => {
  return (
    <>
      {products.map(el => (
        <Product key={el.id} product={el} />
      ))}

      {products.length < total && <button onClick={handleLoadMore}>load more...</button>}
    </>
  )
}

export default ProductsList
