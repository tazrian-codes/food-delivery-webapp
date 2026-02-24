import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '/src/assets/frontend_assets/assets.js'

export const Navbar = () => {

  const[menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img src={assets.logo} className='nav-logo' />
      
      <ul>
        <li className={menu==='home' ? 'active' : ''} onClick={() => setMenu('home')}>home</li>
        <li className={menu==='menu' ? 'active' : ''} onClick={() => setMenu('menu')}>menu</li>
        <li className={menu==='mobile-app' ? 'active' : ''} onClick={() => setMenu('mobile-app')}>mobile-app</li>
        <li className={menu==='contact us' ? 'active' : ''} onClick={() => setMenu('contact us')}>contact us</li>
      </ul>

      <div className='nav-right'>
        <img src={assets.search_icon} className='search-icon' />
        <div className="basket">
          <img src={assets.basket_icon} className='basket-icon' />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}
