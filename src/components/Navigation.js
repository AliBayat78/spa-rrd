import { NavLink } from 'react-router-dom'

const items = [
  { name: 'Home', to: '/' },
  { name: 'About-us', to: '/about-us' },
  { name: 'Profile', to: '/profile' },
  { name: 'blogs', to: '/blogs' },
  { name: 'post', to: '/post' },
]

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink className={(navData) => (navData.isActive ? 'activeLink' : '')} to={item.to}>
                {item.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
