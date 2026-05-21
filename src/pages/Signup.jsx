import { useNavigate } from "react-router-dom"

import "../styles/Login.css"

function Signup() {

  const navigate = useNavigate()

  const handleSignup = (e) => {

    e.preventDefault()

    alert("Account Created Successfully 🎉")

    navigate("/programs")
  }

  return (

    <div className="page-content">

      <div className="login-container">

        <h1>
          Create Account
        </h1>

        <p className="login-subtext">

          Join Fitverse and unlock
          premium fitness programs.

        </p>

        <form
          className="login-form"
          onSubmit={handleSignup}
        >

          <input
            type="text"
            placeholder="Enter Name"
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

      </div>

    </div>
  )
}

export default Signup