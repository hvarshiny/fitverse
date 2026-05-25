import { useState } from "react"

import { useNavigate } from "react-router-dom"

import "../styles/Login.css"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [showGuestForm, setShowGuestForm] =
    useState(false)

  const [guestName, setGuestName] =
    useState("")

  const [guestAge, setGuestAge] =
    useState("")

  const [guestGoal, setGuestGoal] =
    useState("")

  const handleLogin = (e) => {

    e.preventDefault()

    const validEmail =
      "varsh@gmail.com"

    const validPassword =
      "1234"

    if (
      email === validEmail &&
      password === validPassword
    ) {

      localStorage.clear()

      localStorage.setItem(
        "user",
        email
      )

      localStorage.setItem(
        "isLoggedIn",
        "true"
      )

      localStorage.setItem(
        "role",
        "user"
      )

      window.dispatchEvent(
        new Event("storage")
      )

      alert(
        "Login Successful ✅"
      )

      navigate("/home")

    } else {

      alert(
        "Invalid Email or Password ❌"
      )

    }
  }

  const handleGuestLogin = () => {

    if (
      !guestName ||
      !guestAge ||
      !guestGoal
    ) {

      alert(
        "Please fill all guest details"
      )

      return
    }

    localStorage.clear()

    localStorage.setItem(
      "role",
      "guest"
    )

    localStorage.setItem(
      "guestName",
      guestName
    )

    localStorage.setItem(
      "guestAge",
      guestAge
    )

    localStorage.setItem(
      "guestGoal",
      guestGoal
    )

    window.dispatchEvent(
      new Event("storage")
    )

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
          onClick={() =>
            setShowGuestForm(true)
          }
        >
          Continue as Guest
        </button>

        {showGuestForm && (

          <div className="guest-form">

            <input
              type="text"
              placeholder="Enter Name"
              value={guestName}
              onChange={(e) =>
                setGuestName(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Enter Age"
              value={guestAge}
              onChange={(e) =>
                setGuestAge(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Fitness Goal"
              value={guestGoal}
              onChange={(e) =>
                setGuestGoal(e.target.value)
              }
            />

            <button
              onClick={handleGuestLogin}
            >
              Start Quick Sessions
            </button>

          </div>

        )}

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