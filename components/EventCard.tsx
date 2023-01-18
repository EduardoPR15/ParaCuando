import React from 'react'
import LikeButton from './LikeButton'
import NotLikeButton from './NotLikeButton'
import ProfileIcon from './ProfileIcon'

const EventCard = () => {



  
  return (
    <div className='rounded-2xl overflow-hidden w-80 shadow h-max'>
        
        <img src="../Rectangle 1.png" alt="" />
        <div className='w-max relative bottom-6 left-3/4'>
            <NotLikeButton/>
        </div>
      
        <div className='pt-4 pl-4 pb-2 text-h600'>Tienda Zara</div>
        <p className='text-h400-p pl-4 pr-7 pb-4 justify-center text-primary-grayDark'>
            Tienda por departamento de marca de ropa y accesorios.</p>

        <p className='pl-4 pb-4 text-h500-p text-primary-blue'><a href="tiendazara.com">tiendazara.com</a></p>
        <div className='flex pl-4 pb-16'>
            <ProfileIcon/>
            <p className='pl-8 text-h500-p'> 44’800’756 votos</p>
        </div>
        

    </div>
  )
}

export default EventCard