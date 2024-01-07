import {FaTrash} from 'react-icons/fa'
import { Cartshop } from '../Context/Context'
import { useContext } from 'react'

const Subcart = ({prod}) => {

    const { dispatch}=useContext(Cartshop)
  return (
    <div className='sub-cart'>
<div className="sub-cart-img">
    <img src={prod.img} alt="" />
</div>
<div className='sub-detail'>
    <span>{prod.name}</span>
    <span>${prod.price}</span>
</div>

<FaTrash  onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:prod})}}/>
    </div>
  )
}

export default Subcart