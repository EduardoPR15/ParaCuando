import React, { useState } from 'react'
import EventCard from './EventCard'
import ProfileHeader from './ProfileHeader'

const ProfilePage = () => {
  
    
  
    return (
    <div>
    
      <ProfileHeader/>
      <div className="bg-primary-blue w-full h-32">
        <div className="rounded-full w-28 h-28 m-auto relative top-16"><img src="./Ellipse 5.png" alt="" /></div>
      </div>
      <div className=" flex justify-evenly mt-16 ml-10 mr-10 mb-16 md:justify-center md:gap-5 md:ml-60 md:mr-60">
        <div className="rounded-full text-h500-p w-auto py-2 px-5 border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Mis votos</h2></div>
        <div className="rounded-full text-h500-p w-auto py-2 px-5 border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Mis publicaciones</h2></div>
      </div>
  
          <div className="flex mt-3 m-auto w-11/12 flex-col gap-10 items-center">
             <div className="md:w-full md:flex gap-10 md:justify-evenly flex-wrap mb-10">
              <EventCard/>
             <EventCard/>
             <EventCard/>
             <EventCard/>
            
             </div>
            
          </div>
          <button className="w-auto bg-primary-blue text-white rounded-full py-3 px-7 mt-5 mb-5 flex justify-center items-center m-auto md:hidden"> Ver mas</button>
          <div className="h-48 sm:h-36 w-full  ">
            <img className="w-full h-full sm:hidden" src="./Rectangle 137.png" alt="" />
            <img className="hidden sm:flex w-full h-full" src="./Rectangle 138.png" alt="" />
          </div>
    </div>
  )
}

export default ProfilePage