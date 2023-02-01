import Image from 'next/image';
import Ladygaga from '../public/LadyGaga.png';
import ProfileIcon from './ProfileIcon';
const CardDetail = () => {
  return (
    <div className="flex flex-col sm:flex-row max-w-[900px] gap-6 ">
      <div>
        <div className="pt-4 pl-4 pb-2 text-h600">Artista / Pop/ Rock</div>
        <div className="pt-4 pl-4 pb-2 text-h900">Concierto de Lady Gaga</div>
        <p className="text-h400-p pl-4 pr-7 pb-4 justify-center text-primary-grayDark">
          El concierto con la temática de Lady gaga en Las Vegas. El concierto
          con la temática de Lady gaga en Las Vegas.El concierto con la
          temática.
        </p>

        <p className="pl-4 pb-4 text-h500-p text-primary-blue">
          <a href="tiendazara.com">tiendazara.com</a>
        </p>
        <div className="flex pl-4 pb-16">
          <ProfileIcon />
          <p className="pl-8 text-h500-p"> 44’800’756 votos</p>
        </div>
<div className=' flex justify-center'>
<button className="h-20 w-full bg-[#1B4DB1] md:w-4/6 md:h-10 border border-solid rounded-3xl px-2 font-sans text-h600 text-white">
          Votar
        </button>
</div>
        
      </div>
      <Image className="w-full" src={Ladygaga} alt="img" />
    </div>
  );
};

export default CardDetail;
