import { useState, useEffect } from 'react'
import axios from "axios"

const Shop = () => {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("./json/products.json")
    .then((res) => {
      console.log(res);
      setProducts(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className='nes-container with-title darkmode-toggle is-dark'>
      <p className='title'>Shop</p>
      <p>Welcome to the Shop page</p>
    </div>
  )
}

export default Shop
