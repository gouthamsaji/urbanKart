import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const wishlistArray = useSelector((state)=>state.wishlist)
  const cartArray = useSelector((state)=>state.cartItem)
  console.log(wishlistArray)
  const [show, setshow] = useState(false)
  const change=()=>{
    setshow(!show)
  }

  return (
    <>
      <header className="bg-neutral-950 fixed top-0 w-full">
      <nav className="flex items-center justify-between p-2 max-w-screen-xl mx-auto relative"> 
        <div className='flex w-100'>
          <img src={logo} className='flex items-center' alt="logo" width={100} />    
          <Link to={'/'}><h2 className="text-sm md:text-2xl ms-5 flex items-center" style={{color:'white'}}>urban<span style={{color:'gold'}}>Kart</span></h2></Link>
        </div>
        <button onClick={change} className='md:hidden'><FontAwesomeIcon icon={faBars} size="sm" style={{color: "#FFD43B",}} /></button>

        { show && (<div className='flex mt-4 absolute top-full right-0 mt-2 w-60 bg-neutral-800 rounded shadow-lg z-1'>
            <Link to={'/wishlist'}><button className='text-white w-full text-left px-4 py-3 transition duration-200 hover:bg-white hover:text-black group'><FontAwesomeIcon icon={faHeart} size="sm" style={{color: "#ff0000",}} /> Wishlist <span className='p-2 border-slate-500 bg-slate-700 rounded group-hover: text-white ms-1'>{wishlistArray?.length}</span> </button></Link>
            <Link to={'/cart'}><button className='text-white w-full text-left px-4 py-3 transition duration-200 hover:bg-white hover:text-black group'><FontAwesomeIcon icon={faCartShopping} size='sm' style={{color: "#FFD43B",}} /> Cart <span className='p-2 border-slate-500 bg-slate-700 rounded group-hover:text-white ms-1'>{cartArray?.length}</span> </button></Link>
          </div>)
          }

        <div className='md:flex ms:auto hidden'>
          <Link to={'/wishlist'}><button className='text-white px-4 py-3 me-2 transition duration-200 hover:bg-white hover:text-black group'><FontAwesomeIcon icon={faHeart} size="sm" style={{color: "#ff0000",}} /> Wishlist <span className='p-2 border-slate-500 bg-slate-700 rounded group-hover: text-white ms-1'>{wishlistArray?.length}</span> </button></Link>
          <Link to={'/cart'}><button className='text-white px-4 py-3 transition duration-200 hover:bg-white hover:text-black group'><FontAwesomeIcon icon={faCartShopping} size='sm' style={{color: "#FFD43B",}} /> Cart <span className='p-2 border-slate-500 bg-slate-700 rounded group-hover:text-white ms-1'>{cartArray?.length}</span> </button></Link>
        </div>
      </nav>
      </header>      
    </>
  )
}

export default Header