import { createContext, useContext, useReducer } from "react"
import {product} from '../components/data'
import { cartReducer, filterReducer } from "./Reducer"

 export const Cartshop = createContext()

const Context = ({children}) => {

 const [state,dispatch] = useReducer(cartReducer,{products:product,cart:[]})
 const [filter,filterDispatch] = useReducer(filterReducer,{
  bystock:false,
  byfast:false,
  search:'',
 })


  return (
   <Cartshop.Provider value={{state,dispatch, filter,filterDispatch}}>{children}</Cartshop.Provider>
  )
}

export default Context;

