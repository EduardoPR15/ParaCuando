import { useState } from "react";
import EventCard from "../../components/EventCard";


const index = () => {
  
  const [menu, setMenu] = useState(true)
  const [display, setdisplay] = useState('hidden')
  function handleMenu() {  
    if (menu === true) {
    
      setMenu(false)
      setdisplay('hidden')
      
      
    }
    if (menu === false) {
      setMenu(true)
      setdisplay('flex')
  
  }
  console.log(display);
  console.log(menu)
  
}
  return (
  <div>
    <div className="bg-black w-full h-16 flex justify-between">
      <img className="mr-2 w-14 h-7 mt-4 ml-5" src="./Frame2.png" alt="" />
      <div className="w-6/12 h-full flex md:justify-between md:pl-20">
    
        <div > 
          <p className="text-white hidden md:flex mt-6 text-h400-p ">
            <svg className="mt-0.5 mr-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
            </svg>
                    Crear publicaciones</p></div>
        <div>
          <p className="text-white hidden md:flex mt-5 text-h400-p ">
          <svg className="mt-1 mr-2" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.675 1C3.09313 1 1 3.00868 1 5.4864C1 9.97279 6.525 14.0513 9.5 15C12.475 14.0513 18 9.97279 18 5.4864C18 3.00868 15.9069 1 13.325 1C11.744 1 10.3458 1.75331 9.5 2.90631C9.06891 2.31705 8.49622 1.83614 7.8304 1.50431C7.16458 1.17248 6.42525 0.999492 5.675 1Z" stroke="#FF64BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            Mis votos</p></div>
       
        <div className="ml-2 flex">    
         <div className="w-auto h-max p-2 mr-2 border-white border-solid border-2 rounded-full mt-3">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.89233 12.3778L1.89218 12.378C1.68609 12.7135 1.58337 13.0766 1.58337 13.4833V14.25C1.58337 14.5764 1.69093 14.8375 1.9272 15.0738C2.16257 15.3092 2.42326 15.4167 2.75004 15.4167H14.25C14.5766 15.4167 14.8378 15.3093 15.0738 15.0738C15.3093 14.8378 15.4167 14.5766 15.4167 14.25V13.4833C15.4167 13.0766 15.314 12.7135 15.1079 12.378L15.1078 12.3778C14.8991 12.0379 14.63 11.7873 14.2931 11.6121C13.3523 11.1422 12.4007 10.7916 11.4379 10.5581C10.4737 10.3249 9.4948 10.2083 8.50004 10.2083C7.50528 10.2083 6.52642 10.3249 5.56221 10.5581L1.89233 12.3778ZM1.89233 12.3778C2.10096 12.0379 2.37008 11.7873 2.707 11.6121M1.89233 12.3778L2.707 11.6121M2.707 11.6121C3.64778 11.1422 4.59932 10.7916 5.56215 10.5581L2.707 11.6121ZM8.50004 7.75001C7.64637 7.75001 6.93424 7.4548 6.32308 6.84364C5.71192 6.23247 5.41671 5.52035 5.41671 4.66668C5.41671 3.813 5.71192 3.10088 6.32308 2.48972C6.93424 1.87855 7.64637 1.58334 8.50004 1.58334C9.35371 1.58334 10.0658 1.87855 10.677 2.48972C11.2882 3.10088 11.5834 3.813 11.5834 4.66668C11.5834 5.52035 11.2882 6.23247 10.677 6.84364C10.0658 7.4548 9.35371 7.75001 8.50004 7.75001Z" stroke="white" stroke-width="1.5"/>
            </svg>

        </div>
        <p className="mt-5 text-h400-p text-white">erik.perez@gmail.com
        
        </p>
        <div className="mt-4 pl-2">
          <button onClick={handleMenu} >
               <svg width="18" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1L5 6L0 1L0.8875 0.1125L5 4.225L9.1125 0.1125L10 1Z" fill="#A7A6A7"/>
</svg>
          </button>
           
        </div>
      <div className={`bg-primary-grayLighter absolute shadow rounded-md w-40 h-36 top-16 right-4 ${display}`}><h1>ola k ase</h1></div>
        
        </div>
      </div>
    </div> 
    <div className="bg-primary-blue w-full h-32">
      <div className="rounded-full w-28 h-28 m-auto relative top-16"><img src="./Ellipse 5.png" alt="" /></div>
    </div>
    <div className=" flex justify-evenly mt-16 ml-10 mr-10 mb-16 md:justify-center md:gap-5 md:ml-60 md:mr-60">
      <div className="rounded-full text-h500-p w-auto py-2 px-5 border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Mis votos</h2></div>
      <div className="rounded-full text-h500-p w-auto py-2 px-5 border-solid border-2 border-primary-grayDark text-primary-grayDark"><h2>Mis publicaciones</h2></div>
    </div>

        <div className="flex mt-3 m-auto w-11/12 flex-col gap-10 items-center">
           <div className="md:w-full md:flex gap-10 md:justify-evenly flex-wrap">
            <EventCard/>
           <EventCard/>
           <EventCard/>
           <EventCard/>
          
           </div>
          
        </div>
        <button className="w-auto bg-primary-blue text-white rounded-full py-3 px-7 mt-5 mb-5 flex justify-center items-center m-auto"> Ver mas</button>
        <div className="h-48 sm:h-36 w-full  ">
          <img className="w-full h-full sm:hidden" src="./Rectangle 137.png" alt="" />
          <img className="hidden sm:flex w-full h-full" src="./Rectangle 138.png" alt="" />
        </div>
  </div>
  );
};

export default index;
