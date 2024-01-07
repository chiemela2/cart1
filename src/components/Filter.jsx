import React, { useContext } from 'react'
import { Cartshop } from '../Context/Context'

const Filter = () => {

    const {filter:{ bystock,
        byfast,
        search,},filterDispatch}=useContext(Cartshop)


  return (
    <div className='filter-container'>
      <h2>Filter Products</h2>

      <div className="filterred">
        <span className="filter-control">
            <input type="checkbox" onChange={()=>filterDispatch({type:'FILTER_BY_STOCK'})} checked={bystock}/>
            <label>Include out of stock</label>
        </span>
        <span className="filter-control">
            <input type="checkbox" onChange={()=>filterDispatch({type:'FILTER_BY_FASTDEV'})} checked={byfast}/>
            <label>Fast Delivery only</label>
        </span>
      </div>
      <button className="btn" onClick={()=>filterDispatch({type:'CLEAR_FILTER'})}>Clear Filter</button>
    </div>
  )
}

export default Filter