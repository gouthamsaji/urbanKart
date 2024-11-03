import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'
import { useNavigate, Link } from 'react-router-dom'

function Cart() {
  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //to get grand total of price
  const [total,setTotal]=useState(0)
  const getTotal=()=>{
    setTotal(cartArray.map((item)=>item.price).reduce((a,b)=>a+b,0))
  }
  useEffect(()=>{
    getTotal()
  },[cartArray])

  //to empty cart
  const handleCheckout = () => {
    alert('Order placed successfully!')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
      { cartArray?.length>0?
      <div className='my-20'>
        <h1 className='text-center text-2xl font-bold pt-7 pb-3'>My Cart</h1>
        <div className='md:grid grid-cols-[2fr_1fr]'>
          <div className='md:py-5 md:px-20'>
            <table className='w-full shadow-lg'>
              <thead>
                <tr>
                  <th className='p-3 bg-yellow-500'>S.no</th>
                  <th className='p-3 bg-yellow-500'>Title</th>
                  <th className='p-3 bg-yellow-500'>Image</th>
                  <th className='p-3 bg-yellow-500'>Price</th>
                  <th className='p-3 bg-yellow-500'>Action</th>
                </tr>
              </thead>
              { cartArray.map((item, index)=>(
              <tbody className='text-center'>
                <tr>
                  <td className='p-3'>{index+1}</td>
                  <td className='p-3'>{item?.title}</td>
                  <td className='flex justify-center p-3'><img src={item?.image} alt="" style={{width:'100px', height:'100px'}}/></td>
                  <td className='p-3'>${item?.price}</td>
                  <td className='p-3'><button onClick={()=>dispatch(removeCartItem(item?.id))} className='p-2'><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></button></td>
                </tr>
              </tbody>
              )) }
            </table>
          </div>
          <div className='pt-5 px-10'>
            <div className='p-5 shadow-lg'>
              <h1 className='text-center text-xl font-bold'>Cart Summary</h1>
              <p className='mt-4 text-sm'>Total number of products : {cartArray?.length}</p>
              <p className='mt-4 text-sm'>Grand Total : ${total}</p>
              <button onClick={handleCheckout} className='w-full bg-green-600 p-3 mt-2 text-white hover:bg-green-800'>Checkout</button>
            </div>
          </div>
        </div>
      </div>

        :
        
      <div className='w-full mt-10 md:grid grid-cols-3'>
        <div></div>
        <div className='mb-20'>
          <img src="../public/assets/emptycart.png" className='w-full' alt="empty cart" />
          <h1 className='text-center text-2xl font-bold'>Your cart is empty</h1>
          <p className='text-center'>Looks like you have not added anything to your cart. Go ahead & explore top categories.</p>
        </div>
        <div></div>
      </div>
      }
    </>
  )
}

export default Cart