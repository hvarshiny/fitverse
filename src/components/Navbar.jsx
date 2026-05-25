import { Link } from "react-router-dom"

import { useEffect, useState } from "react"

import "../styles/Navbar.css"

function Navbar() {

  const [user, setUser] =
    useState("")

  useEffect(() => {

    const loggedUser =
      localStorage.getItem("user")

    if (loggedUser) {

      setUser(loggedUser)

    }

  }, [])

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

          ) : (

            <Link to="/login">

              Login

            </Link>

          )}

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