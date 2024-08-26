import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <ul className="nav-menu">
        <Link to="/login" className="nav-link">
          <li>LoginPage</li>
        </Link>
        <Link to="/" className="nav-link">
          <li>FirstPage</li>
        </Link>
      </ul>
    </div>
  </nav>
)
export default Header