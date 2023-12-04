import { Routes, Route } from 'react-router-dom'

import Home from "../pages/Home"
import Policy from "../pages/Policy"
import Contact from "../pages/Contact"

import Shop from "../pages/Shop"
import Product from './Product'

import SnakeGame from './Snake'

const Screen = () => {
  return (
    <article id='screen' className='darkmode-toggle'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="/shop/products/:id" element={<Product />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path='/games/snake' element={<SnakeGame/>}/>
      </Routes>
    </article>
  )
}

export default Screen
