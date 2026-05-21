import "../styles/Login.css"

function Login() {
  return (
    <div className="page-content">

      <div className="login-container">

        <h1>Welcome Back</h1>

        <form className="login-form">

          <input
            type="email"
            placeholder="Enter Your Email"
          />

          <input
            type="password"
            placeholder="Enter Your Password"
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <button className="guest-btn">
          Continue as Guest
        </button>

        <p className="signup-text">
          New to Fitverse?
          <span> Sign Up</span>
        </p>

      </div>

    </div>
  )
}

export default Login