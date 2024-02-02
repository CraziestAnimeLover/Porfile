import React from 'react'
import { NavLink } from 'react-router-dom'
import './Image1.css'
import Image from './pic1.jpg'
const Image1 = () => {
  return (
    <div className='homeImg'>
        <div className='blur'>
            <img className='laptop' src={Image} alt='laptop'/>
        </div>
        <div className='content'>
            <p>Hi, I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <NavLink to='/project' className='button'>Project</NavLink>
            <NavLink to='/contact' className='button button-Transparent '>Contact</NavLink>
        </div>
    </div>
  )
}

export default Image1