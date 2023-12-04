import { Routes, Route } from 'react-router-dom'

import Home from "../pages/Home"
import Policy from "../pages/Policy"
import Shop from "../pages/Shop"
import Contact from "../pages/Contact"
import SnakeGame from './Snake'
import Frogger from './Frogger'

const Screen = () => {
  return (
    <article id='screen' className='darkmode-toggle'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path='/snake' element={<SnakeGame/>}/>
        <Route exact path='/frogger' element={<Frogger/>}/>
      </Routes>
    </article>
  )
}

export default Screen
