import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from './EventCard';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type Props = {};
const Slider = (props: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex flex-row justify-center items-center"
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
      ...
    </Swiper>
  );
};

export default Slider;
