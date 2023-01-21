import React from 'react'

const MultiStepFrom = () => {
  return (
    <div>
        <div className='w-full h-72 bg-primary-blue '>
            <div className='flex flex-col justify-center items-center m-auto w-2/3 '>
                <img className='mt-6 w-36' src="./logowhite.png" alt="" />
                <img className='w-36' src="./Groupwhite.png" alt="" />
            </div>
            <h1 className='text-primary-yellow text-h500-T pl-6 mt-5 mb-5'>¡Bienvenido, creador!</h1>
            <p className='text-white w-3/4 ml-6 text-h500-p'>A continuación puedes completar la info de la marca, artista o torneo que quieres cerca.</p>
        </div>
        <button className='text-h500-T text-primary-blue ml-6 mt-8'>Back</button>
        <div className='w-3/4 h-2 m-auto mt-8 rounded-lg bg-primary-grayLight overflow-hidden'>
            <div className='bg-primary-blue w-1/3 h-8' ></div>
        </div>
        
    </div>
  )
}

export default MultiStepFrom