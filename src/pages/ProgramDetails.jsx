import { useParams } from "react-router-dom"

import { useState } from "react"

import programs from "../data/programsData"

import "../styles/ProgramDetails.css"

function ProgramDetails() {

  const { id } = useParams()

  const [completed, setCompleted] = useState(false)

  const program = programs.find(
    (item) => item.id === Number(id)
  )

  const handleComplete = () => {
    setCompleted(true)
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

          <h3>Duration:</h3>
          <p>{program.duration}</p>

          <h3>Difficulty:</h3>
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

        <button
          className="complete-btn"
          onClick={handleComplete}
        >
          Mark as Completed
        </button>

        {completed && (
          <p className="success-message">
            Workout Completed Successfully ✅
          </p>
        )}

      </div>

    </div>
  )
}

export default ProgramDetails