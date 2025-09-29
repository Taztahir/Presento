import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import client1 from '../assets/client-1.png'
import client2 from '../assets/client-2.png'
import client3 from '../assets/client-3.png'
import client4 from '../assets/client-4.png'
import client5 from '../assets/client-5.png'
import client6 from '../assets/client-6.png'
import client7 from '../assets/client-7.png'
import client8 from '../assets/client-8.png'

export default function Sponsores() {
  const clients = [
    client1, client2, client3, client4,
    client5, client6, client7, client8
  ]

  return (
    <div className="max-w-6xl mx-auto py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={6}
        slidesPerGroup={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        className="mySwiper"
      >
        {clients.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`client-${i + 1}`} className="w-20 mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles */}
      <style>{`
        /* Space between images and dots */
        .mySwiper .swiper-pagination {
          margin-top: 30px;
          position: relative;
        }

        /* Inactive dot color */
        .mySwiper .swiper-pagination-bullet {
          background-color: #444;
          opacity: 0.5;  /* slightly faded for inactive bullets */
        }

        /* Active dot color */
        .mySwiper .swiper-pagination-bullet-active {
          background-color: #E03A3C;
          opacity: 1;    /* fully visible for active bullet */
        }
      `}</style>
    </div>
  )
}
