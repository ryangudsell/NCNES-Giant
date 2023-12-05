import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("./json/products.json")
    .then((res) => {
      setProducts([
        res.data.products[0], 
        res.data.products[1], 
        res.data.products[2]
      ])
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000)
      return () => clearTimeout(timer)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className='nes-container with-title darkmode-toggle is-dark'>
      <p className='title'>Home</p>
      {/* <p>Welcome to the Home page</p> */}
      <p>Welcome to the Home page</p>
      <button className='nes-btn'
      onClick={() => navigate("/contact")}>Contact</button>
      <button className='nes-btn'
      onClick={() => navigate("/shop")}>Shop</button>
      <div className='featured-products'>
        {products.map((product) => {
          return (
          <div key={`${product.id}-product`}
            className='darkmode-toggle is-dark'
            onClick={() => navigate(`/shop/products/${product.id}`)}>
            <img src={`${product.imageUrl}`} alt={`Main Image for ${product.title}`} />
            <p>{product.title}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
