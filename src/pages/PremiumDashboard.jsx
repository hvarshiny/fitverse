import { Link } from "react-router-dom"

import "../styles/PremiumDashboard.css"

const premiumPrograms = [

  {
    id: 1,

    title: "Weight Loss Program",

    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",

    description:
      "Burn fat with intense cardio and HIIT sessions.",
  },

  {
    id: 2,

    title: "Muscle Gain Program",

    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",

    description:
      "Build strength with focused muscle workouts.",
  },

  {
    id: 3,

    title: "Yoga & Flexibility",

    image:
      "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg",

    description:
      "Improve flexibility and relaxation with yoga.",
  },

]

function PremiumDashboard() {

  return (

    <div className="page-content">

      <h1 className="premium-heading">
        Premium Workout Programs
      </h1>

      <div className="premium-container">

        {premiumPrograms.map((program) => (

          <div
            className="premium-card"
            key={program.id}
          >

            <img
              src={program.image}
              alt={program.title}
            />

            <h2>{program.title}</h2>

            <p>{program.description}</p>

            <Link to={`/premium/${program.id}`}>

              <button>
                Start Program
              </button>

            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default PremiumDashboard