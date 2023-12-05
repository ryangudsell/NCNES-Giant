import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Loading from '../components/Loading'

const Shop = () => {
  const navigate = useNavigate()
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("./json/products.json")
    .then((res) => {
      setProducts(res.data.products)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000)
      return () => clearTimeout(timer)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>{loading ? 
    <Loading />
    :
    <div className='nes-container with-title darkmode-toggle is-dark'>
      <p className='title'>Shop</p>
      {/* <p>Welcome to the shop</p> */}
      <p>Welcome to the Shop</p>
      <article className='nes-container darkmode-toggle is-dark shop-grid-container'>
        {products?.map((product) => {
          return (
            <div className='shop-grid darkmode-toggle is-dark' key={`${product.id}-game`}
            onClick={() => navigate(`/shop/products/${product.id}`)}>
              <img src={`${product.imageUrl}`} alt={`Main Image for ${product.title}`} />
              <p>{product.title}</p>
              <p className='price'>{product.price}</p>
            </div>
          )
        })}
      </article>
    </div>
    }</>
  )
}

export default Shop
