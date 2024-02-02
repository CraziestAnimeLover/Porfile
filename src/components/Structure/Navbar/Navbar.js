import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUnorderedList,AiOutlineClose } from "react-icons/ai";
import './navbar.css';
import { useState } from 'react';
const Navbar = () => {
    const [menuclick,setMenuClick]=useState(false)
    const handleClick=()=> setMenuClick(!menuclick);
  return (
    <nav>
        <div className='menu'>
            <ul className={menuclick ? 'list active' : 'list'}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/project'>Project</NavLink>
                </li>
            </ul>
        <div className='menuicon' onClick={handleClick}>
            {menuclick?
            (<AiOutlineClose size={20} style={{color:'#fff'}}/>)
            :
            (<AiOutlineUnorderedList size={20} style={{color:"#fff"}}/>)
        }
        </div>
        </div>
    </nav>
  )
}

export default Navbar
