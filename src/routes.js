import AboutUsPage from './pages/AboutUsPage'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import BlogPage from './pages/BlogPage'
import Blog from './components/Blog'

const routes = [
  { path: '/', component: HomePage },
  { path: '/profile/*', component: Profile },
  { path: '/about-us', component: AboutUsPage },
  { path: '*', component: NotFound },
  { path: '/blogs', component: BlogPage },
  { path: '/blogs/:id', component: Blog },
]

export default routes
