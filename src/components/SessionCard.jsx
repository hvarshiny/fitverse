import { Link } from "react-router-dom"

function SessionCard({ id, title, duration, image }) {

  return (

    <div className="session-card">

      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>{duration} Seconds Per Exercise</p>

      <Link to={`/workout/${id}`}>

        <button>
          Start Session
        </button>

      </Link>

    </div>
  )
}

export default SessionCard