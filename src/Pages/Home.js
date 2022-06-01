import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>This is the HOME page</h2>
      {/* replaced will not put the history on the stack, instead it will replace the current page with the requested page without keeping the back history */}
      <button onClick={() => navigate('/order-summary', {replaced: true})}>Place Order</button>
    </div>
  )
}

export default Home