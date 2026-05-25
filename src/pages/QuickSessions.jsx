import sessions from "../data/sessionsData"

import SessionCard from "../components/SessionCard"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "../styles/Sessions.css"

function QuickSessions() {

  return (

    <div className="page-content">

      <h1 className="session-heading">
        Quick Sessions
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
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

        className="sessions-swiper"
      >

        {sessions.map((session) => (

          <SwiperSlide key={session.id}>

            <SessionCard
              id={session.id}
              title={session.title}
              duration={session.duration}
              image={session.image}
            />

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  )
}

export default QuickSessions