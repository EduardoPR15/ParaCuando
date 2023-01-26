import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from './EventCard';

import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type Props = {};
const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      className="min-h-full"
    >
      <SwiperSlide>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard />
      </SwiperSlide>
      .
    </Swiper>
  );
};

export default Slider;
