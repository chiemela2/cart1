import React from 'react'
import {Link} from 'react-router-dom'
import UI from './UI'
import { useContext } from 'react'
import { Cartshop } from '../Context/Context'

const SmallCart = ({shop}) => {

  const {state:{cart},
  dispatch}=useContext(Cartshop)
  return (
   <div className={shop?'small-cart':'block'}>
 {cart.length <= 0?(
  <h2>THE CART IS EMPTY!</h2>
 ):(
  <div className="ui">
  {cart.map((prod)=>{
    return <UI prod={prod} key={prod.id}/>
   })}
  </div>
 )}
 <button className="btn">
  <Link to='/cart'>Go To Cart</Link>
 </button>
   </div>
  )
}

export default SmallCart