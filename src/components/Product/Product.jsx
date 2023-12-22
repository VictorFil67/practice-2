import { useNavigate } from 'react-router-dom'
import { Container } from './Product.styled'

const Product = ({ product: { title, description, price, id } }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(id.toString())
  }
  return (
    <Container onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>$ {price}</button>
    </Container>
  )
}

export default Product

// import { useLocation, useNavigate } from 'react-router-dom'
// import { Container } from './Product.styled'

// const Product = ({
//   product: { title, description, price, brand, category, thumbnail, id },
//   single,
// }) => {
//   const navigate = useNavigate()
//   const handleClick = () => {
//     navigate(id.toString())
//   }

//   const { pathname } = useLocation()

//   return (
//     <Container {...(pathname === '/products' && { onClick: handleClick })} $isDetails={single}>
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <button>$ {price}</button>
//       {single && (
//         <>
//           <p>brand: {brand}</p>
//           <p>category: {category}</p>
//           <img src={thumbnail} alt="img" />
//         </>
//       )}
//     </Container>
//   )
// }

// export default Product
