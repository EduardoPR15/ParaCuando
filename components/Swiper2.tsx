import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from './EventCard';

import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { kMaxLength } from 'buffer';
type Props = {};

const Swiper2 = () => {
  return (
    
    <div className=' w-11/12 m-auto relative overflow-hidden'>
      <Swiper
       grabCursor={true}
      modules={[Navigation]}
      spaceBetween={10} //10
      slidesPerView={5} //3
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      className="w-[900px] m-auto   absolute">
      <SwiperSlide className=' '>
      <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
      </SwiperSlide>
      <SwiperSlide className=' '>
      <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Tienda de ropa</h2></div>
      </SwiperSlide>
      <SwiperSlide className=' '>
      <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Rock</h2></div>
      </SwiperSlide>
      <SwiperSlide className=' '>
      <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
      </SwiperSlide>
      <SwiperSlide className=' '>
      <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
      </SwiperSlide>
      <SwiperSlide className=' '>
      <div className="rounded-full text-xs max-w-max py-2 px-4  border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Restaurantes</h2></div>
      </SwiperSlide>
      .
    </Swiper>
    </div>
  )
}

export default Swiper2