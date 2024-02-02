import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './header.css'
import Logo from './logo.jpg'
const Header = () => {
  return (
   <div className='header'>
    <NavLink  to="/">
        <img src={Logo} alt='logo'/>
    </NavLink>
    <Navbar/>
   </div>
  )
}

export default Header
