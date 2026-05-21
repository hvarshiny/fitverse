import { Link } from "react-router-dom"

function ProgramCard({ title, price, image }) {

  return (

    <div className="program-card">

      <img
        src={image}
        alt={title}
      />

      <h2>{title}</h2>

      <p>{price}</p>

      <Link to="/login">

        <button>
          Join Now
        </button>

      </Link>

    </div>
  )
}

export default ProgramCard