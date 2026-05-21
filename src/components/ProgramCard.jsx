import { Link } from "react-router-dom"

function ProgramCard({ id, title, price, image }) {
  return (

    <div className="program-card">

      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>{price}</p>

      <Link to={`/program/${id}`}>

        <button>
          Join Now
        </button>

      </Link>

    </div>
  )
}

export default ProgramCard