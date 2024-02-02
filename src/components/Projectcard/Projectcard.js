import React from 'react'
import { NavLink } from 'react-router-dom'
import './projectcard.css'
const Projectcard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p className='btc'>-3 Days-</p>
                <p className='btc'>-3 Pages-</p>
                <p className='btc'>-Featured-</p>
                <p className='btc'>-Responsive Design-</p>
                <NavLink to='/contact' className='button'>PURCHASE NOW</NavLink>
            </div>

            <div className='card'>
                 <h3>Premium</h3>
                <span className='bar'></span>
                <p className='btc'>$ 300</p>
                <p className='btc'>-5 Days-</p>
                <p className='btc'>-5 Pages-</p>
                <p className='btc'>-Featured-</p>
                <p className='btc'>-Responsive Design-</p>
                <NavLink to='/contact' className='button'>PURCHASE NOW</NavLink>
            </div>

            <div className='card'>
                <h3>Buisness</h3>
                <span className='bar'></span>
                <p className='btc'>$ 900</p>
                <p className='btc'>-8 Days-</p>
                <p className='btc'>-56 Pages-</p>
                <p className='btc'>-Featured-</p>
                <p className='btc'>-Responsive Design-</p>
                <NavLink to='/contact' className='btn'>PURCHASE NOW</NavLink>
            </div>
        </div>
      
    </div>
  )
}

export default Projectcard
