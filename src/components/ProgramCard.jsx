import { Link } from "react-router-dom"

function ProgramCard({

  id,
  title,
  price,
  image,

}) {

  const handleJoinNow = () => {

    localStorage.setItem(
      "selectedProgram",
      id
    )
  }

  return (

    <div className="program-card">

      <img
        src={image}
        alt={title}
      />

      <h2>{title}</h2>

      <p>{price}</p>

      <Link to="/login">

        <button onClick={handleJoinNow}>
          Join Now
        </button>

      </Link>

    </div>
  )
}

export default ProgramCard