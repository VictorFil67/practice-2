import { Container } from './Product.styled'

const DetailsProduct = ({
  product: { title, description, price, brand, category, thumbnail, id },
}) => {
  return (
    <Container $isDetails>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>$ {price}</button>
      <p>brand: {brand}</p>
      <p>category: {category}</p>
      <img src={thumbnail} alt="img" />
    </Container>
  )
}

export default DetailsProduct
