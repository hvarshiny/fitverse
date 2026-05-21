import sessions from "../data/sessionsData"

import SessionCard from "../components/SessionCard"

import "../styles/Sessions.css"

function QuickSessions() {

  return (

    <div className="page-content">

      <h1 className="session-heading">
        Quick Sessions
      </h1>

      <div className="sessions-container">

        {sessions.map((session) => (

          <SessionCard
            key={session.id}
            id={session.id}
            title={session.title}
            duration={session.duration}
            image={session.image}
          />

        ))}

      </div>

    </div>
  )
}

export default QuickSessions