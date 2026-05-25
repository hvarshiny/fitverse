import { useNavigate } from "react-router-dom"

function ProgramCard({

  id,
  title,
  goal,
  image,

}) {

  const navigate = useNavigate()

  const handleJoinNow = () => {

  const role =
    localStorage.getItem("role")

  if (role === "guest") {

    navigate("/login")

    return
  }

  navigate(`/premium/${id}`)

}
  return (

    <div className="program-card">

      <img
        src={image}
        alt={title}
      />

      <h2>{title}</h2>

      <p>{goal}</p>

      <button onClick={handleJoinNow}>
        Join Now
      </button>

    </div>
  )
}

export default ProgramCard