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
import Vehicles from './ui/Vehicles/Vehicles'
import VehicleDetail from './ui/VehicleDetail/VehicleDetail'
import AdminHome from './ui/Admin/AdminHome'
import AdminCarList from './ui/Admin/AdminCarList'
import AdminProfile from './ui/Admin/AdminProfile'
import AdminDashboard from './ui/Admin/AdminDashboard'
import AdminUserList from './ui/Admin/AdminUserList'

export default function App() {
  
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
      <Route path="/vehicles" element={<Vehicles/>} />
      <Route path="/vehicle/:id" element={<VehicleDetail/>} />
      <Route path="/admin" element={<AdminHome/>} />
      <Route path="/admin/profile" element={<AdminProfile/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      <Route path="/admin/carList" element={<AdminCarList/>} />
      <Route path="/admin/userList" element={<AdminUserList/>} />
    </Routes>
    <Footer/>
    </>
  )
}


