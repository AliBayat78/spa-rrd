import { Outlet, Route, Routes } from 'react-router-dom'
import DashBoard from '../components/Dashboard'
import Downloads from '../components/Downloads'
import SideBar from '../components/SideBar'

const Profile = () => {
  return (
    <>
      <p>Welcome to Profile Page</p>
      <div>
        <SideBar />
        <Routes>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="downloads" element={<Downloads />} />
        </Routes>
      </div>
    </>
  )
}

export default Profile
