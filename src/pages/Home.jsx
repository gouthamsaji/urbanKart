import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addWishlistItem } from '../redux/slices/wishlistSlice';
import { addItemToCart } from '../redux/slices/cartSlice';

function Home() {
  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()
  
  return (
    <div className='mt-20 mb-10 px-10 md:grid grid-cols-4'>

      { data?.length>0 &&
        data?.map((item)=>(
        <div className="p-2">
          <div className='p-3 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer'>
          <img src={item?.image} alt="no image" className='w-full h-60' />
          <h4 className='text-center text-xl'>{item?.title.slice(0,20)}...</h4>
          <p className='text-justify'>{item?.description.slice(0,25)}...</p>
          <p>Price : <span className='font-bold'>${item?.price}</span></p>
          <div className='flex justify-between'>
            <button onClick={()=>dispatch(addWishlistItem(item))} className='p-2 bg-red-600 rounded'><FontAwesomeIcon icon={faHeart} size="md" style={{color: "#ffffff",}} /></button>
            <button onClick={()=>dispatch(addItemToCart(item))} className='p-2 bg-green-500 rounded'><FontAwesomeIcon icon={faCartShopping} size="md" style={{color: "#ffffff",}} /></button>
          </div>
          </div>
        </div>
        ))
      }

    </div>
  )
}

export default Home