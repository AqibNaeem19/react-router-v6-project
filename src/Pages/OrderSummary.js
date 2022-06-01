import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Order Placed Successfull</h2>
      {/* -1 means to go back to the page from where you came from. */}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary