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
const Slider = () => {
  return (
    
    <div className=' w-11/12 m-auto relative overflow-hidden'>
      <Swiper
       grabCursor={true}
      modules={[Navigation]}
      spaceBetween={150} //10
      slidesPerView={3} //3
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      className="w-[900px] m-auto   absolute">
      <SwiperSlide className=' '>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide className=' '>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide className=' '>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide className=' '>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide className=' '>
        <EventCard />
      </SwiperSlide>
      
      .
    </Swiper>
    </div>
  );
};

export default Slider;
