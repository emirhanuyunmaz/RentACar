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
import AdminAddUser from './ui/Admin/AdminAddUser'
import AdminAddCar from './ui/Admin/AdminAddCar'
import { Provider } from 'react-redux'
import { store } from './store/store'
import MessageProvider from './ui/components/Message/MessageProvider'
import ProtectedRoute from './utils/ProtectedRoute'
import UnauthorizedRoute from './utils/UnauthorizedRoute'
import AdminProtectedRoute from './utils/AdminProtectedRoute'

export default function App() {
  
  return (
    <Provider store={store}>
      <MessageProvider>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<UnauthorizedRoute><Login/></UnauthorizedRoute>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      <Route path="/userDashboard" element={<UserDashboard/>} />
      <Route path="/resetPassword" element={<ResetPassword/>} />
      <Route path="/vehicles" element={<Vehicles/>} />
      <Route path="/vehicle/:id" element={<VehicleDetail/>} />
      <Route path="/admin" element={<AdminProtectedRoute><AdminHome/></AdminProtectedRoute>} />
      <Route path="/admin/profile" element={<AdminProfile/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      <Route path="/admin/carList" element={<AdminCarList/>} />
      <Route path="/admin/userList" element={<AdminUserList/>} />
      <Route path="/admin/addUser" element={<AdminAddUser/>} />
      <Route path="/admin/addCar" element={<AdminAddCar/>} />
    </Routes>
    <Footer/>
    </MessageProvider>
    </Provider>
  )
}


