import React from 'react'
import { FreeMode, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import EventCard from './EventCard'
import 'swiper/css';
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swiper2 = () => {
  return (
    <div className=' w-full  py-4 px-4 justify-center relative'>
        <Swiper
        
        grabCursor={true}
        modules={[Navigation]}
        className=' w-96 overflow-hidden absolute mb-2'
        spaceBetween={10} //10
      slidesPerView={3} //3
      navigation
      onSwiper={(swiper) => console.log(swiper)}
        >

    <SwiperSlide>
    <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
        
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Tienda de ropa</h2></div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Rock</h2></div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
    </SwiperSlide>
    </Swiper>
    </div>
    
  )
}

export default Swiper2