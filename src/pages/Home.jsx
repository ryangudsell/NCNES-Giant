import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='nes-container with-title is-dark'>
      <p className='title'>Home</p>
      <p>Welcome to the Home page</p>
      <button className='nes-btn'
      onClick={() => navigate("/contact")}>Contact</button>
      <button className='nes-btn'
      onClick={() => navigate("/shop")}>Shop</button>
      {/* Get and map 3 products here, like a featured products section */}
    </div>
  )
}

export default Home
