import { useNavigate } from "react-router-dom"

import "../styles/Login.css"

function Login() {

  const navigate = useNavigate()

  const handleLogin = (e) => {

    e.preventDefault()

    alert("Premium Login Successful ✅")

    navigate("/premium")
  }

  const handleGuest = () => {

    alert("Continuing As Guest")

    navigate("/sessions")
  }

  return (

    <div className="page-content">

      <div className="login-container">

        <h1>
          Premium Access
        </h1>

        <p className="login-subtext">

          Unlock premium programs and
          unlimited workout sessions.

        </p>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <button type="submit">
            Login & Continue
          </button>

        </form>

        <div className="extra-options">

          <button
            className="guest-btn"
            onClick={handleGuest}
          >
            Continue As Guest
          </button>

          <p onClick={() => navigate("/signup")}>
            New User? Sign Up Now
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login