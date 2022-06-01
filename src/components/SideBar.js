import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside>
      <ul className="aside">
        <li>
          <NavLink to="dashboard" className={(navData) => (navData.isActive ? 'activeTab' : '')}>
            dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="downloads" className={(navData) => (navData.isActive ? 'activeTab' : '')}>
            downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar
