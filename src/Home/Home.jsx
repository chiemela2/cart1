import React, { useContext } from 'react'
import {  Cartshop } from '../Context/Context'
import Single from '../components/Single'
import Filter from '../components/Filter'

const Home = () => {

 const {state:{products},filter:{ bystock,
  byfast,
  search,}} = useContext(Cartshop)
 const changeproducts=()=>{
  let newproduct = products;
if(!bystock){
  newproduct=newproduct.filter((prod)=>prod.instock)
}


if(byfast){
  newproduct=newproduct.filter((prod)=>prod. fastdelvery)
}
if(search){
  newproduct=newproduct.filter((prod)=>prod.name.toLowerCase().includes(search))
}

return newproduct;
 }
 
  return (
    <div className='home'>
     <div className="filters">
     <Filter/>
     </div>
 <div className="single-prod">
 {changeproducts().map((prod)=>{
   return <Single prod={prod} key={prod.id}/>
  })}
 </div>
    </div>
  )
}

export default Home