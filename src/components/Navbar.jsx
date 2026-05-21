import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Fitverse
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/login">
            Login
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar