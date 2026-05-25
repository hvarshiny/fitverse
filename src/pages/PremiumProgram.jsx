import { Link } from "react-router-dom"

import { useParams } from "react-router-dom"

import "../styles/PremiumProgram.css"

const premiumPrograms = [

  {
    id: 1,

    title: "Weight Loss",

    description:
      "Burn calories and lose fat with intense cardio workouts.",

    workouts: [

      {
        id: "hiit",

        name: "HIIT Training",

        duration: "20 Minutes",

        image:
          "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      },

      {
        id: "cardio",

        name: "Cardio Blast",

        duration: "15 Minutes",

        image:
          "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg",
      },

      {
        id: "core",

        name: "Core Workout",

        duration: "10 Minutes",

        image:
          "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
      },

    ],
  },

  {
    id: 2,

    title: "Muscle Gain",

    description:
      "Build muscle with focused resistance workouts.",

    workouts: [

      {
        id: "chest",

        name: "Chest Workout",

        duration: "25 Minutes",

        image:
          "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      },

      {
        id: "back",

        name: "Back Workout",

        duration: "20 Minutes",

        image:
          "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg",
      },

      {
        id: "arms",

        name: "Arm Workout",

        duration: "15 Minutes",

        image:
          "https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg",
      },

    ],
  },

  {
    id: 3,

    title: "Strength Training",

    description:
      "Increase overall strength with compound lifts.",

    workouts: [

      {
        id: "deadlift",

        name: "Deadlift Session",

        duration: "20 Minutes",

        image:
          "https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg",
      },

      {
        id: "squats",

        name: "Squat Workout",

        duration: "20 Minutes",

        image:
          "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
      },

      {
        id: "shoulder",

        name: "Shoulder Press",

        duration: "15 Minutes",

        image:
          "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
      },

    ],
  },

  {
    id: 4,

    title: "Fat Burn",

    description:
      "Fast-paced exercises to burn maximum calories.",

    workouts: [

      {
        id: "burpees",

        name: "Burpees",

        duration: "10 Minutes",

        image:
          "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
      },

      {
        id: "rope",

        name: "Jump Rope",

        duration: "15 Minutes",

        image:
          "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg",
      },

      {
        id: "mountain",

        name: "Mountain Climbers",

        duration: "15 Minutes",

        image:
          "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
      },

    ],
  },

]

function PremiumProgram() {

  const { id } = useParams()

  const program = premiumPrograms.find(
    (item) => item.id === Number(id)
  )

  if (!program) {

    return (

      <div className="page-content">

        <h1>
          Program Not Found
        </h1>

      </div>
    )
  }

  return (

    <div className="page-content">

      <div className="premium-program-container">

        <h1>{program.title}</h1>

        <p className="program-description">
          {program.description}
        </p>

        <div className="premium-workouts">

          {program.workouts.map(
            (workout) => (

              <div
                className="premium-workout-card"
                key={workout.id}
              >

                <img
                  src={workout.image}
                  alt={workout.name}
                />

                <h2>
                  {workout.name}
                </h2>

                <p>
                  {workout.duration}
                </p>

                <Link
                  to={`/premium-workout/${workout.id}`}
                >

                  <button>
                    Start Workout
                  </button>

                </Link>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  )
}

export default PremiumProgram