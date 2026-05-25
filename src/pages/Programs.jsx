import programs from "../data/programsData"

import ProgramCard from "../components/ProgramCard"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "../styles/Programs.css"

function Programs() {

  return (

    <div className="page-content">

      <h1 className="program-heading">
        Our Programs
      </h1>
<br /><br />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        breakpoints={{

          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },

        }}

        className="programs-swiper"
      >

        {programs.map((program) => (

          <SwiperSlide key={program.id}>

            <ProgramCard
              id={program.id}
              title={program.title}
              price={program.price}
              image={program.image}
            />

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  )
}

export default Programs