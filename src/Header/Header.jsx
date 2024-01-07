import { useContext, useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import SmallCart from '../components/SmallCart'
import './header.css'
import { Cartshop } from '../Context/Context'

const Header = () => {
  const {state:{cart}, filterDispatch}=useContext(Cartshop)
    const [shop,setshop]=useState(false)
  return (
    <div className='header'>
     <h2>Shooping Cart</h2>
     <input type="text" placeholder='Search Products' onChange={(e)=>filterDispatch({type:'FILTER_BY_SEARCH',payload:e.target.value,})}/>
     <div className="header-icon">
     <div className="icon">
     <FaShoppingCart onClick={()=>{setshop(!shop)}}/>{cart.length}
     </div>
      <SmallCart shop={shop}/>
     </div>
    </div>
  )
}

export default Header