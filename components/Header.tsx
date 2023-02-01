import Image from 'next/image';
import { useState } from 'react';
import btn from '../public/btnclick.png';
import core from '../public/Core.png';
import logo from '../public/Frame.png';
import frame from '../public/Frame2.png';
import person from '../public/person.png';
import Searcher from './Searcher';

import Link from 'next/link';
import ProfileHeader from './ProfileHeader';
const Header = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
   
    <div className='w-screen'>

    
      <div className="">
        {/* <div className="flex justify-center items-center ">
          <Image src={frame} alt="icons" />
        </div> */}
       
          {isLogin ? (
            <ProfileHeader/>
            // <div className="flex flex-wrap justify-items-end content-center items-end justify-end gap-5">
            //   <button className="text-blue text-xs"> <Link href="/publicacion">+ Crear pubicacion</Link> </button>
            //   <div className="">
            //     <Image className="w-full " src={core} alt="core" />
            //   </div>
            //   <button className="text-white text-xs">Mis Votos</button>
            //   <div className="">
            //     <Image className="w-full" src={person} alt="person" />
            //   </div>
            //   <button className="text-white text-xs"><Link href="/perfil">Florencio Quelca</Link></button>
            //   <div className="">
            //     <Image className="w-full" src={btn} alt="click" />
            //   </div>
            // </div>
          ) : (
            <div className="max-w-sm flex flex-wrap justify-items-end content-center items-end justify-end gap-5">
              <button className="text-blue text-xs"><Link href="/publicacion">+ Crear pubicacion</Link></button>
              <button className="text-white text-xs"><Link href="/login">Log in</Link></button>
              <button className="text-white text-xs"><Link href="/signup">Sign up</Link></button>
            </div>
          )}
      
      </div>
      <div className=" bg-[url('../public/Header.png')] h-[30.5rem] w-full flex flex-col items-center justify-center  gap-6">
        <div>
          <Image src={logo} alt="logo"></Image>
        </div>

        <Searcher />

        <div className="  max-w-sm flex justify-around  gap-2  ">
          <button className="text-gray rounded-3xl bg-white px-1 font-sans py-2 sm:px-2.5 sm:py-2.5">
            Marcas y tiendas
          </button>
          <button className="text-gray rounded-3xl bg-white px-2 text-sm">
            Artistas y conciertos
          </button>
          <button className="text-gray  rounded-3xl bg-white px-2 text-sm">
            Torneos
          </button>
        </div>
      </div>
      </div>
    
  );
};

export default Header;
