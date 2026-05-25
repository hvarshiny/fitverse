import { Link, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"

import "../styles/Navbar.css"

function Navbar() {

  const [user, setUser] =
    useState("")

  const [role, setRole] =
    useState("")

  const navigate = useNavigate()
useEffect(() => {

  const loggedUser =
    localStorage.getItem("user")

  const userRole =
    localStorage.getItem("role")

  const guestName =
    localStorage.getItem("guestName")

  if (loggedUser) {

    setUser(loggedUser)

  }

  else if (
    userRole === "guest"
  ) {

    setUser(guestName)

  }

  setRole(userRole)

}, [window.location.pathname])

  const handleLogout = () => {

  localStorage.clear()

  setUser("")

  setRole("")

  navigate("/")

}
  return (

    <nav className="navbar">

      <div className="logo">

        FitVerse

      </div>

      <ul className="nav-links">

        <li>

          {user ? (

            <div className="profile-box">

              👤 {user}

            </div>

          ) : role === "guest" ? (

            <div className="profile-box">

              Guest User

            </div>

          ) : (

            <Link to="/login">

              Login

            </Link>

          )}

        </li>

        {(user || role === "guest") && (

          <li>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </li>

        )}

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