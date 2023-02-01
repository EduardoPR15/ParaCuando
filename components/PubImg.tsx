import React from 'react'
import Link from 'next/link'

const PubImg = () => {
  return (
    <div className='sm:flex'>
     <div className='w-full h-72 sm:h-screen sm:w-64 sm:flex-col bg-primary-blue'>
            <div className='flex flex-col justify-center items-center m-auto w-2/3 sm:mt-24'>
                <img className='mt-6 w-36' src="./logowhite.png" alt="" />
                <img className='w-36' src="./Groupwhite.png" alt="" />
                
            </div>
            <h1 className='text-primary-yellow text-h500-T pl-6 mt-5 mb-5'>¡Bienvenido, creador!</h1>
            <p className='text-white w-3/4 ml-6 text-h500-p'>A continuación puedes completar la info de la marca, artista o torneo que quieres cerca.</p>
        <p className='hidden sm:absolute sm:inline bottom-16 left-6 text-h400 text-white '>Ayuda</p>
        </div>
        <div className='w-11/12 m-auto -mt-5'>
        <button className=' text-primary-blue text-h600 ml-6 mt-8'> <Link href='/publicacion'> Back</Link></button>
        <div className='w-3/4 sm:w-8/12 sm:ml-40 h-2 m-auto mt-6 rounded-lg bg-primary-grayLight overflow-hidden'>
            <div className='bg-primary-blue w-6/6 h-8' ></div>
        </div>
        <div className='sm:ml-40 sm:w-8/12 pt-10'>
        <h1 className='text-black text-h500-T '>Fotos</h1>
        <p className='text-primary-gray mb-8'>Selecciona maximo tres fotos para crear una galeria</p>
            <div className='border-2 w-full border-primary-grayDark rounded-lg flex p-3 sm:p-6  gap-3 sm:gap-10 sm:justify-center'>
                <div className='h-32 w-28 sm:w-44 sm:h-52  bg-gray flex justify-center items-center'>
                <svg  width="10" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
                </svg>
                 </div>
                 <div className='h-32 w-28 sm:w-44 sm:h-52  bg-gray flex justify-center items-center'>
                <svg  width="10" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
                </svg>
                 </div>
                 <div className='h-32 w-28 sm:w-44 sm:h-52  bg-gray flex justify-center items-center'>
                <svg  width="10" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
                </svg>
                 </div>
            </div>
            <div className='flex justify-center mt-6 mb-10 sm:mb-1'>
            <button  className="bg-primary-blue text-primary-grayLighter text-h600 py-4 px-6 rounded-full ">Publicar</button>
            </div>
        </div>


        </div>
    </div>
  )
}

export default PubImg