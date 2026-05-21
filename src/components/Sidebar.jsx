import { Link } from "react-router-dom"
import "../styles/sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">

      <Link to="/">
        Home
      </Link>

      <Link to="/programs">
        Programs
      </Link>

      <Link to="/sessions">
        Quick Sessions
      </Link>

      <Link to="/bmi">
        BMI Calculator
      </Link>

    </div>
  )
}

export default Sidebar