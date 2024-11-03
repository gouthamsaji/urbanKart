import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import { addItemToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray)
  const dispatch = useDispatch()

  const wishes = (item)=>{
    dispatch(addItemToCart(item))
    dispatch(removeWishlistItem(item.id))
  }

  return (
    <>

      { wishlistArray?.length>0?
      <div className='mt-20 mb-10 px-10 md:grid grid-cols-4'>
        { wishlistArray?.map((item)=>(
          <div className="p-2">
          <div className='p-3 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer'>
            <img src={item.image} alt="no image" className='w-full h-60' />
            <h4 className='text-center text-xl'>{item?.title.slice(0,20)}...</h4>
            <p className='text-justify'>{item?.description.slice(0,25)}...</p>
            <p>Price : <span className='font-bold'>${item?.price}</span></p>
            <div className='flex justify-between'>
              <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='p-2 bg-red-600 rounded'><FontAwesomeIcon icon={faTrash} size="md" style={{color: "#ffffff",}} /></button>
              <button onClick={()=>wishes(item)} className='p-2 bg-green-500 rounded'><FontAwesomeIcon icon={faCartShopping} size="md" style={{color: "#ffffff",}} /></button>
            </div>
          </div>
        </div>
        ))
        
        }
      </div>
        :
      <div className='w-full mt-10 md:grid grid-cols-3'>
        <div></div>
        <div className='mb-20'>
          <img src="../public/assets/wishlist.jpg" className='w-full' alt="empty cart" />
          <h1 className='text-center text-2xl font-bold'>Wishlist is empty</h1>
          <p className='text-center'>Add now. Buy Later.</p>
        </div>
        <div></div>
      </div>
      }

    </>
  )
}

export default Wishlist