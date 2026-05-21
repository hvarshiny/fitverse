import programs from "../data/programsData"

import ProgramCard from "../components/ProgramCard"

import "../styles/programs.css"

function Programs() {

  return (

    <div className="page-content">

      <h1 className="program-heading">
        Our Programs
      </h1>

      <div className="programs-container">

        {programs.map((program) => (

          <ProgramCard
            key={program.id}
            id={program.id}
            title={program.title}
            price={program.price}
            image={program.image}
          />

        ))}

      </div>

    </div>
  )
}

export default Programs