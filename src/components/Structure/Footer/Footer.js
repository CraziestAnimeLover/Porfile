import React from 'react'
import './footer.css'
import {BsFacebook, BsFillHouseDoorFill, BsGithub, BsInstagram, BsLinkedin, BsMailbox, BsPhone, BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='left'>
          <div className='address'>
            <h4><BsFillHouseDoorFill sixe={20} style={{color:'black' , marginRight:'2rem'}} />
            House Adress
             <p >Haryana</p></h4>
          </div>
        </div>
        <div className='phone'>
        <h4>
          <BsPhone sixe={20} style={{color:'black' , marginRight:'2rem'}} />
          9015088766
        </h4>
        <div className='email'>
        <h4>
          <BsMailbox sixe={20} style={{color:'black' , marginRight:'2rem'}} />
          riyarsuny706@gmail.com
        </h4>
        </div>
        </div>

        <div className='right'>
          <h4>About the Comapany</h4>
          <p>This is me Sunny Riar.CEO & Founder of SolutionSunny.</p>
          <p>I enjoy discussing new project and design challenges.</p>
          
          <div className='social-media'>
            <BsFacebook sixe={30} style={{color:'black' , marginRight:'1rem'}} />
            <BsInstagram sixe={30} style={{color:'black' , marginRight:'1rem'}} />
            <BsLinkedin sixe={30} style={{color:'black' , marginRight:'1rem'}} />
            <BsGithub sixe={30} style={{color:'black' , marginRight:'1rem'}} />
            <BsWhatsapp sixe={30} style={{color:'black' , marginRight:'1rem'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer