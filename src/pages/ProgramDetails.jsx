import { useParams } from "react-router-dom"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {program.exercises.map((exercise, index) => (

            <SwiperSlide key={index}>

              <div className="exercise-card">

                <img
                  src={program.image}
                  alt={exercise}
                />

                <h3>{exercise}</h3>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        <h1>{program.title}</h1>

        <p className="goal">
          {program.goal}
        </p>

        <div className="info">

          <h3>Duration</h3>
          <p>{program.duration}</p>

          <h3>Difficulty</h3>
          <p>{program.difficulty}</p>

        </div>

      </div>

    </div>
  )
}

export default ProgramDetails