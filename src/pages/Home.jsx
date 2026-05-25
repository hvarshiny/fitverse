import "../styles/Home.css"
import {useNavigate} from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  return (

    
    <div className="home-page">

      <div className="home-container">

        <div className="home-content">

          <h1>
            TRANSFORM YOUR BODY <br />
            WITH <span className="highlight">FITVERSE</span>
          </h1>

          <p>
            Push beyond your limits and unlock your strongest self
            with powerful workout plans, fitness programs,
            and quick training sessions.
          </p>

          <button
  className="home-btn"
  onClick={() =>
    navigate("/programs")
  }
>
  Get Started
</button>
        </div>

      </div>

    </div>
  )
}

export default Home