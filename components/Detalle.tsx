import Image from 'next/image';
import { useState } from 'react';
import btn from '../public/btnclick.png';
import core from '../public/Core.png';
import frame from '../public/Frame2.png';
import person from '../public/person.png';
import CardDetail from './CardDetail';
import Footer from './Footer';
import Frame from './Frame';
import ProfileHeader from './ProfileHeader';
import Searcher from './Searcher';
import Slider from './Slider';
const Detalle = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div>
      <div className="">
        <div className=" ">
         
        </div>
        
          {isLogin ? (
           <ProfileHeader/>
          ) : (
            <div className="max-w-sm flex flex-wrap justify-items-end content-center items-end justify-end gap-5">
              <button className="text-blue text-xs"> + Crear pubicacion</button>
              <button className="text-white text-xs">Log-in</button>
              <button className="text-white text-xs">Sign Up</button>
            </div>
          )}
       
      </div>

      <div className="flex flex-col p-3 w-full border border-[#A7A6A7]">
        <div className="flex justify-between ">
          <div className=" hidden max-w-sm flex justify-around  gap-2  ">
            <button className="text-gray rounded-3xl border-2 border-primary-gray w-auto bg-white px-2 py-1 font-sans">
              Marcas y tiendas
            </button>
            <button className="text-gray rounded-3xl border-2 border-primary-gray bg-white px-2 text-sm">
              Artistas y conciertos
            </button>
            <button className="text-gray  rounded-3xl border-2 border-primary-gray bg-white px-2 text-sm">
              Torneos
            </button>
          </div>
          <div className='flex justify-evenly w-11/12'>
          <div className='border-2 p-2 border-gray rounded-full'>
            b
          </div>
          <Searcher />
          </div>
          
        </div>
      </div>
      <div className="flex flex-col px-6 py-6 max-w-[900px] mx-auto ">
        <CardDetail />
      </div>
      <div className="flex flex-col relative overflow-hidden w-screen sm:py-6 sm:px-6 sm:max-w-[900px] sm:mx-auto">
        <Frame />
      </div>

      <div className="flex flex-col px-6 py-6">
        <div className="py-6 sm:w-[900px] mx-auto  ">
          <p className="text-[#1A1E2E] text-9xl  font-sans font-semibold text-h600 leading-7 not-italic">
            Recientes
          </p>
          <p className="text-[#6E6A6C] font-normal leading-5 text-base">
            las personas ultimamente estan hablando de esto
          </p>
        </div>
        <div>
          <Slider />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detalle;
