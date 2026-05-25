import {

  useEffect,
  useState,

} from "react"

import {

  useParams,

} from "react-router-dom"

import "../styles/PremiumWorkoutSession.css"

const workoutData = {

  hiit: [

    {
      name: "Jumping Jacks",

      image:
        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
    },

    {
      name: "Burpees",

      image:
        "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
    },

  ],

  cardio: [

    {
      name: "Mountain Climbers",

      image:
        "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
    },

    {
      name: "Skipping",

      image:
        "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg",
    },

  ],

  core: [

    {
      name: "Plank",

      image:
        "https://images.pexels.com/photos/6456306/pexels-photo-6456306.jpeg",
    },

    {
      name: "Crunches",

      image:
        "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg",
    },

  ],

  chest: [

    {
      name: "Push Ups",

      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    },

    {
      name: "Bench Press",

      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    },

  ],

  legs: [

    {
      name: "Squats",

      image:
        "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
    },

    {
      name: "Lunges",

      image:
        "https://images.pexels.com/photos/6455771/pexels-photo-6455771.jpeg",
    },

  ],

  strength: [

    {
      name: "Deadlift",

      image:
        "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg",
    },

    {
      name: "Shoulder Press",

      image:
        "https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg",
    },

  ],

  yoga: [

    {
      name: "Tree Pose",

      image:
        "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg",
    },

    {
      name: "Lotus Pose",

      image:
        "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg",
    },

  ],

  stretch: [

    {
      name: "Hamstring Stretch",

      image:
        "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    },

    {
      name: "Back Stretch",

      image:
        "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
    },

  ],

  meditation: [

    {
      name: "Breathing Exercise",

      image:
        "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg",
    },

  ],
  back: [

  {
    name: "Lat Pulldown",

    image:
      "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg",
  },

],

arms: [

  {
    name: "Bicep Curls",

    image:
      "https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg",
  },

],

deadlift: [

  {
    name: "Deadlift",

    image:
      "https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg",
  },

],

squats: [

  {
    name: "Barbell Squats",

    image:
      "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
  },

],

shoulder: [

  {
    name: "Shoulder Press",

    image:
      "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
  },

],

burpees: [

  {
    name: "Burpees",

    image:
      "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
  },

],

rope: [

  {
    name: "Jump Rope",

    image:
      "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg",
  },

],

mountain: [

  {
    name: "Mountain Climbers",

    image:
      "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
  },

],

}

function PremiumWorkoutSession() {

  const { id } = useParams()

  const exercises =
    workoutData[id]

  const [exerciseIndex, setExerciseIndex] =
    useState(0)

  const [timeLeft, setTimeLeft] =
    useState(60)

  useEffect(() => {

    if (!exercises) return

    if (timeLeft === 0) {

      if (
        exerciseIndex <
        exercises.length - 1
      ) {

        setExerciseIndex(
          (prev) => prev + 1
        )

        setTimeLeft(60)
      }

      return
    }

    const timer = setTimeout(() => {

      setTimeLeft(
        (prev) => prev - 1
      )

    }, 1000)

    return () => clearTimeout(timer)

  }, [

    timeLeft,
    exerciseIndex,
    exercises,

  ])

  if (!exercises) {

    return (

      <div className="page-content">

        <h1>
          Workout Not Found
        </h1>

      </div>
    )
  }

  const currentExercise =
    exercises[exerciseIndex]

  return (

    <div className="page-content">

      <div className="premium-session-container">

        <h1>
          {currentExercise.name}
        </h1>

        <img
          src={currentExercise.image}
          alt={currentExercise.name}
        />

        <h2>
          Time Left:
          {" "}
          {timeLeft}s
        </h2>

      </div>

    </div>
  )
}

export default PremiumWorkoutSession