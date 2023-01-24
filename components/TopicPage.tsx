import React from 'react'
import ProfileHeader from './ProfileHeader'
import SearchBar from './SearchBar'
import Searcher from './Searcher'

const TopicPage = () => {
  return (
    <div>
      <ProfileHeader/>
      <div className=" z-10w-full h-52 bg-primary-blue flex justify-center sm:justify-start">
        <div className='z-20'>
        <img className='h-full sm:hidden' src="./Rectangle 134.png" alt="" />
         <img className='hidden sm:block w-full h-full' src="./Rectangle 135.png" alt="" /> 
        </div>
      <div className='z-30 absolute top-20 sm:left-36'>
        <p className='text-white text-h500-p pb-6'>Home / Marcas</p>
        <h1 className='text-primary-yellow text-h900 pb-2'>Marcas y tiendas</h1>
        <p className='text-white text-h500-p pb-9'>Descubre las marcas y tiendas que la gente quiere cerca</p>
      </div>
        
      </div>
      <div className=' w-full h-10'>
    
        <label className="relative block w-full h-full">
  <span className="absolute right-5 top-1/3">
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8541 11.5833H12.097L11.8287 11.3021C12.4276 10.5458 12.8653 9.65497 13.1105 8.69335C13.3557 7.73172 13.4023 6.72308 13.247 5.73958C12.7966 2.84375 10.5732 0.53125 7.88991 0.177084C6.94655 0.0473606 5.98838 0.153929 5.08873 0.488635C4.18908 0.82334 3.3718 1.37731 2.69942 2.10816C2.02704 2.839 1.51739 3.72736 1.20946 4.70523C0.901529 5.68311 0.803486 6.7246 0.922832 7.75C1.24866 10.6667 3.37617 13.0833 6.04033 13.5729C6.94515 13.7417 7.8731 13.691 8.7578 13.4245C9.64249 13.158 10.4621 12.6822 11.1578 12.0313L11.4166 12.3229V13.1458L15.4895 17.5729C15.8824 18 16.5245 18 16.9174 17.5729C17.3103 17.1458 17.3103 16.4479 16.9174 16.0208L12.8541 11.5833ZM7.10408 11.5833C4.71783 11.5833 2.79158 9.48958 2.79158 6.89583C2.79158 4.30208 4.71783 2.20833 7.10408 2.20833C9.49033 2.20833 11.4166 4.30208 11.4166 6.89583C11.4166 9.48958 9.49033 11.5833 7.10408 11.5833Z" fill="#6E6A6C"/>
</svg>
  </span>
  <input className="w-full h-full rounded-full border-2 border-primary-grayDark pl-4"
         placeholder="¿Qué quieres ver en tu ciudad?" type="text" name="search"/>
</label>
      </div>
      <div className=" flex justify-evenly pt-5 ">
        <div className="rounded-full text-xs w-auto py-2 px-5 border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Marcas y tiendas</h2></div>
        <div className="rounded-full text-xs w-auto py-2 px-5 border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Artistas y conciertos</h2></div>
        <div className="rounded-full text-xs w-auto py-2 px-5 border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Torneos</h2></div>
        </div>
        <div>
          <h1>Populares en Querétaro</h1>
          <p>Lo que las personas piden más</p>
        </div>
      
    </div>
  )
}

export default TopicPage