import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header.css'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" className="logo" />
      <nav className="nav">

            <NavLink
              to="/home"
              className={ isActive  => 
                isActive ? "active homeabout" : "inactive homeabout"
              }
            >
              Accueil
            </NavLink>

            <NavLink
              to="/about"
              className={ isActive  => 
                isActive ? "active homeabout" : "inactive homeabout"
              }
            >
              A propos
            </NavLink>
      </nav>
    </div>
  )
}

export default Header
