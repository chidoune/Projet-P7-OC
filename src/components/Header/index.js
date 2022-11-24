import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header.css'
 
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" className="logo"/>
      <nav className="nav">
          <Link to="/" className="homeabout">Accueil</Link>
          <Link to="/about" className="homeabout">A propos</Link>
      </nav>
    </div>
  )
}

export default Header;