import React from 'react'
import Cart from './CartWidget'

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h4>CoderCommerce 2021</h4>
      </div>
      <ul>
        <li>Home</li>
        <li>Categorias</li>
        <li>Nosotros</li>
      </ul>
      <Cart />      
    </div>
    
  );
}

export default NavBar;