import { useParams } from "react-router-dom"

import { useEffect, useState } from "react"

import sessions from "../data/sessionsData"

import "../styles/WorkoutSession.css"

function WorkoutSession() {

  const { id } = useParams()

  const session = sessions.find(
    (item) => item.id === Number(id)
  )

  const [started, setStarted] = useState(false)

  const [exerciseIndex, setExerciseIndex] = useState(0)

  const [timeLeft, setTimeLeft] = useState(session.exerciseTime)

  const [completed, setCompleted] = useState(false)

  useEffect(() => {

    if (!started || completed || !session) return

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev === 1) {

          if (
            exerciseIndex <
            session.exercises.length - 1
          ) {

            setExerciseIndex(
              (prevIndex) => prevIndex + 1
            )

            return session.exerciseTime
          }

          else {

            clearInterval(timer)

            setCompleted(true)

            return 0
          }
        }

        return prev - 1
      })

    }, 1000)

    return () => clearInterval(timer)

  }, [started, exerciseIndex, completed, session])

  if (!session) {
    return <h1>Workout Not Found</h1>
  }

  return (

    <div className="page-content">

      <div className="workout-container">

        <h1>{session.title}</h1>

        <img
          src={session.image}
          alt={session.title}
        />

        {!started && !completed && (

          <button
            onClick={() => setStarted(true)}
          >
            Start Workout
          </button>

        )}

        {started && !completed && (

          <div className="exercise-box">

            <h2>
              {session.exercises[exerciseIndex]}
            </h2>

            <p>
              Time Left: {timeLeft}s
            </p>

            <span>
              Exercise {exerciseIndex + 1} of{" "}
              {session.exercises.length}
            </span>

          </div>

        )}

        {completed && (

          <div className="completed-box">

            <h2>
              Workout Completed 🎉
            </h2>

            <p>
              Great job completing the session!
            </p>

          </div>

        )}

      </div>

    </div>
  )
}

export default WorkoutSession