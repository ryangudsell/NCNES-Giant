import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const {id} = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`./json/products.json`)
    .then((res) => {
        setProduct(res.data.products[id])
        setLoading(false)
    })
  }, [])

  return (
    <>{loading ? 
    <></>
    :
    <div className='nes-container with-title darkmode-toggle is-dark product-container'>
        <p className='title'>{product.title}</p>
        <div className='product-grid'>
            <img className='product-image' src={`${product.imageUrl}`} alt={`Game Image for ${product.title}`} />
            <p className='product-price'>{product.price}</p>
            <p className='product-desc'>{product.description}</p>
        </div>
    </div>
    }</>
  )
}

export default Product
