import Image from 'next/image';
import { useState } from 'react';
import btn from '../public/btnclick.png';
import core from '../public/Core.png';
import frame from '../public/Frame2.png';
import person from '../public/person.png';
import CardDetail from './CardDetail';
import Footer from './Footer';
import Frame from './Frame';
import Searcher from './Searcher';
import Slider from './Slider';
const Detalle = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div>
      <div className="w-full  h-16 bg-black flex  justify-between gap-7 px-8">
        <div className="flex justify-center items-center ">
          <Image src={frame} alt="icons" />
        </div>
        <nav className=" flex flex-wrap justify-items-end content-center items-end justify-end gap-5	">
          {isLogin ? (
            <div className="flex flex-wrap justify-items-end content-center items-end justify-end gap-5">
              <button className="text-blue text-xs"> + Crear pubicacion</button>
              <div className="">
                <Image className="w-full" src={core} alt="core" />
              </div>
              <button className="text-white text-xs">Mis Votos</button>
              <div className="">
                <Image className="w-full" src={person} alt="person" />
              </div>
              <button className="text-white text-xs">Florencio Quelca</button>
              <div className="">
                <Image className="w-full" src={btn} alt="click" />
              </div>
            </div>
          ) : (
            <div className="max-w-sm flex flex-wrap justify-items-end content-center items-end justify-end gap-5">
              <button className="text-blue text-xs"> + Crear pubicacion</button>
              <button className="text-white text-xs">Log-in</button>
              <button className="text-white text-xs">Sign Up</button>
            </div>
          )}
        </nav>
      </div>

      <div className="flex flex-col px-64 py-6 border border-[#A7A6A7]">
        <div className="flex justify-between">
          <div className="  max-w-sm flex justify-around  gap-2  ">
            <button className="text-gray rounded-3xl bg-white px-2 font-sans">
              Marcas y tiendas
            </button>
            <button className="text-gray rounded-3xl bg-white px-2 text-sm">
              Artistas y conciertos
            </button>
            <button className="text-gray  rounded-3xl bg-white px-2 text-sm">
              Torneos
            </button>
          </div>
          <Searcher />
        </div>
      </div>
      <div className="flex flex-col px-64 py-6">
        <CardDetail />
      </div>
      <div className="flex flex-col px-64 py-6">
        <Frame />
      </div>

      <div className="flex flex-col px-64 py-6">
        <div className="py-6">
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
