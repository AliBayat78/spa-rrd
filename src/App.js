import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import React from 'react'
import routes from './routes'
import PostPage from './pages/PostPage'
import Profile from './pages/Profile'
import DashBoard from './components/Dashboard'
import Downloads from './components/Downloads'

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => {
          return <Route key={route.path} path={route.path} element={<route.component />} />
        })}
        <Route path="/post">
          <Route path=":id" element={<PostPage />} />
          <Route path="" element={<PostPage />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
