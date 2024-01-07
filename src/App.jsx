import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import Home from './Home/Home'
import Cart from './Cart/Cart'



function App() {
  return (
    <BrowserRouter>
    <Header/>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App
