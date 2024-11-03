import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='min-h-80 bg-neutral-800 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
        <div className="flex justify-center flex-col text-center">
            <h1 className="text-sm md:text-2xl" style={{color:'goldenrod'}}><FontAwesomeIcon icon={faShop} style={{color: "#ffffff",}} /> UrbanKart</h1>
            <br />
            <p className="text-xs md:text-sm" style={{color:'white', textAlign:'justify'}}>Explore a diverse range of high-quality products, from trendy fashion and accessories to cutting-edge electronics and home essentials. Our user-friendly interface ensures a seamless shopping experience, allowing you to browse, compare, and purchase with ease. </p>
        </div>
        <div className="flex justify-center flex-col text-center">
          <h1 className="text-sm md:text-2xl mt-5 md:mt-0" style={{color:'goldenrod'}}>Links</h1>
          <br />
          <ul className="flex flex-row md:flex-col justify-center text-xs md:text-sm" style={{color:'white'}}>
            <Link to={'/'}><p className='mr-3'>Home</p></Link> <br />
            <Link to={'/wishlist'}><p className='mr-3'>Wishlist</p></Link> <br />
            <Link to={'/cart'}><p className='mr-3'>Cart</p></Link>
          </ul>
        </div>
        <div className="flex justify-center flex-col text-center">
        <h1 className="text-sm md:text-2xl mt-5 md:mt-0" style={{color:'goldenrod'}}>Guides</h1>
          <br />
          <ul className="flex flex-row md:flex-col justify-center text-xs md:text-sm" style={{color:'white'}}>
            <p className='mr-3'>React</p><br />
            <p className='mr-3'>React Bootstrap</p><br />
            <p className='mr-3'>Bootswatch</p>
          </ul>
        </div>
        <div className="flex justify-center flex-col text-center">
        <h1 className="text-sm md:text-2xl mt-5 md:mt-0" style={{color:'goldenrod'}}>Contact Us</h1>
          <br />
          <div className='flex justify-center'>
            <input type="text" placeholder='Email id' className='w-2/3 p-2 rounded me-2' />
            <button type='button' className='p-2 bg-yellow-600 rounded'>Subscribe</button>
          </div>
          <div className='md:flex justify-between p-5'>
            <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#ffffff",}} className='mx-2' />
            <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#ffffff",}} className='mx-2' />
            <FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#ffffff",}} className='mx-2' />
            <FontAwesomeIcon icon={faGoogle} size="xl" style={{color: "#ffffff",}} className='mx-2' />
          </div>
        </div>
    </div>
  )
}

export default Footer