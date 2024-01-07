import React, { useContext } from 'react'
import { Cartshop } from '../Context/Context'

const Single = ({prod}) => {

  const {state:{cart},
  dispatch}=useContext(Cartshop)
  return (
    <div className="cart-item">
        <div className="cart-item-img">
            <img src={prod.img} alt={prod.name} />
        </div>
       <div  className='prod-d'>
       <span>{prod.name}</span>
        <span>${prod.price}</span>
       </div>
        <span>{prod.fastdelvery ?'Fast Delivery':'5 days Delivery'}</span>
         {cart.some(p=>p.id ===prod.id)?(  <button className='btn red' onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:prod})}}>Remove From Cart</button>):(  <button disabled={!prod.instock} className='btn' onClick={()=>{dispatch({type:'ADD_TO_CART',payload:prod})}}>{!prod.instock?'Out of Stock':'Add to Cart'}</button>)}
    </div>
  )
}

export default Single