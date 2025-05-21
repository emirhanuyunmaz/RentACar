// import { Button } from 'antd'
import { Route, Routes } from 'react-router'
import Login from './ui/Auth/Login'
import Header from './ui/Header/Header'
import Register from './ui/Auth/Register'
import Home from './ui/Home/Home'
import Footer from './ui/Footer/Footer'
import Contact from './ui/Contact/Contact'
import About from './ui/About/About'
import Profile from './ui/Profile/Profile'
import UserDashboard from './ui/Profile/UserDashboard'
import ResetPassword from './ui/ResetPassword/ResetPassword'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/userDashboard" element={<UserDashboard/>} />
      <Route path="/resetPassword" element={<ResetPassword/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
