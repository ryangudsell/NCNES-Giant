import { Routes, Route } from 'react-router-dom'

import Home from "../pages/Home"
import Policy from "../pages/Policy"
import Shop from "../pages/Shop"
import Contact from "../pages/Contact"

const Screen = () => {
  return (
    <article id='screen'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </article>
  )
}

export default Screen
