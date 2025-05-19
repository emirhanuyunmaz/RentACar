// import { Button } from 'antd'
import { Route, Routes } from 'react-router'
import Login from './ui/Auth/Login'
import Header from './ui/Header/Header'
import Register from './ui/Auth/Register'
import Home from './ui/Home/Home'
import Footer from './ui/Footer/Footer'
// import './App.css'
// import {Route } from "react-router";

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
