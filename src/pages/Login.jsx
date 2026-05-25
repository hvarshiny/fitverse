import { useState } from "react"

import { useNavigate } from "react-router-dom"

import "../styles/Login.css"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const handleLogin = (e) => {

    e.preventDefault()

    if (!email || !password) {

      alert(
        "Please fill all fields"
      )

      return
    }

    localStorage.setItem(
      "user",
      email
    )

    localStorage.setItem(
      "isLoggedIn",
      true
    )

    alert(
      "Login Successful ✅"
    )

    const selectedProgram =
      localStorage.getItem(
        "selectedProgram"
      )

    if (selectedProgram) {

      navigate(
        `/premium/${selectedProgram}`
      )

    } else {

      navigate("/")

    }
  }

  const handleGuestLogin = () => {

    navigate("/sessions")
  }

  const handleSignup = () => {

    navigate("/signup")
  }

  return (

    <div className="page-content">

      <div className="login-container">

        <h1>
          Login
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login & Continue
          </button>

        </form>

        <button
          className="guest-btn"
          onClick={handleGuestLogin}
        >
          Continue as Guest
        </button>

        <button
          className="signup-btn"
          onClick={handleSignup}
        >
          New User Sign Up
        </button>

      </div>

    </div>
  )
}

export default Login