import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '/src/assets/frontend_assets/assets.js'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

export const Navbar = ({setShowLogin}) => {

  const[menu, setMenu] = useState('home');
  const {getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  const goToSection = (id) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({behavior: 'smooth'});
      }
    }, 100)
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} className='nav-logo' /></Link>
      
      <ul>
        <li className={menu==='home' ? 'active' : ''} onClick={() => {setMenu('home'); goToSection('header')}}>home</li>
        <li className={menu==='menu' ? 'active' : ''} onClick={() => {setMenu('menu'); goToSection('explore-menu')}}>menu</li>
        <li className={menu==='mobile-app' ? 'active' : ''} onClick={() => {setMenu('mobile-app'); goToSection('app-download')}}>mobile-app</li>
        <li className={menu==='contact us' ? 'active' : ''} onClick={() => {setMenu('contact us'); goToSection('footer')}}>contact us</li>
      </ul>

      <div className='nav-right'>
        <img src={assets.search_icon} className='search-icon' />
        <div className="basket">
          <Link to='/cart'><img src={assets.basket_icon} className='basket-icon' /></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}
