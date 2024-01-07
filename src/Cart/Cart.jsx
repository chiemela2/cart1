import React from 'react'
import { Cartshop } from '../Context/Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import Subcart from './Subcart'
import { useState } from 'react'
import { useEffect } from 'react'

const Cart = () => {

  const {state:{cart}}=useContext(Cartshop)
  const [total,settotal]=useState()

  useEffect(()=>{
     settotal(cart.reduce((acc,curr)=>acc+ Number(curr.price),0))
  },[cart])
  return (
    <div className='cart-container'>
     <div className="cart-total">
      <span>Total:${total}</span>
      <button className="btn">
        <Link to='/'>Go To Homepage</Link>
      </button>
     </div>
     <div className="cart-product">
        {cart.map((prod)=>{
          return <Subcart prod={prod} key={prod.id}/>
        })}
     </div>
    </div>
  )
}

export default Cart