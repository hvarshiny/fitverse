import { useParams } from "react-router-dom"

import "../styles/PremiumProgram.css"

const premiumData = {

  1: {
    title: "Weight Loss Program",

    workouts: [
      "HIIT Training",
      "Fat Burn Cardio",
      "Core Workout",
      "Cycling Session",
    ],
  },

  2: {
    title: "Muscle Gain Program",

    workouts: [
      "Chest Workout",
      "Back Workout",
      "Leg Day",
      "Strength Training",
    ],
  },

  3: {
    title: "Yoga & Flexibility",

    workouts: [
      "Morning Yoga",
      "Breathing Exercises",
      "Stretch Flow",
      "Meditation Session",
    ],
  },

}

function PremiumProgram() {

  const { id } = useParams()

  const program = premiumData[id]

  if (!program) {

    return <h1>Program Not Found</h1>
  }

  return (

    <div className="page-content">

      <div className="premium-program-container">

        <h1>{program.title}</h1>

        <div className="workout-list">

          {program.workouts.map((workout, index) => (

            <div
              className="workout-item"
              key={index}
            >

              <h2>{workout}</h2>

              <button>
                Start Workout
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default PremiumProgram