import { useParams } from "react-router-dom"

import programs from "../data/programsData"

import "../styles/ProgramDetails.css"

function ProgramDetails() {

  const { id } = useParams()

  const program = programs.find(
    (item) => item.id === Number(id)
  )

  if (!program) {
    return <h1>Program Not Found</h1>
  }

  return (

    <div className="page-content">

      <div className="details-container">

        <img
          src={program.image}
          alt={program.title}
        />

        <h1>{program.title}</h1>

        <p className="price">
          {program.price}
        </p>

        <div className="info">

          <h3>Duration</h3>
          <p>{program.duration}</p>

          <h3>Difficulty</h3>
          <p>{program.difficulty}</p>

        </div>

        <div className="exercise-section">

          <h2>Exercises Included</h2>

          <ul>

            {program.exercises.map((exercise, index) => (

              <li key={index}>
                {exercise}
              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>
  )
}

export default ProgramDetails