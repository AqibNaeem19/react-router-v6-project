import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h2>These are the products</h2>
      <ul>
        <li>Phones</li>
        <li>Home decor</li>
        <li>Toys</li>
      </ul>

      <Link to='featured'>Featured</Link>
      <Link to='new'>New</Link>
      {/* The child router component will only be rendered at the place of outlet tag */}
      <Outlet />
    </div>
  )
}

export default Products