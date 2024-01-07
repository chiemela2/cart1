import React, { useContext } from 'react'
import { Cartshop } from '../Context/Context'
import {FaTrash} from 'react-icons/fa'

const UI = ({prod}) => {

    const {
    dispatch}=useContext(Cartshop)

    
  return (

    <div className='ui-container'>
    <div className="ui-img">
        <img src={prod.img} alt="" />
    </div>
    <div className='ui-details'>
    <span>{prod.name}</span>
    <span>${prod.price}</span>
    </div>
   <FaTrash onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:prod})}}/>
</div>
   
  )
}

export default UI