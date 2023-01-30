import React from 'react'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className="w-full h-2/4 justify-center items-center flex flex-col sm:h-screen  sm:flex-row overflow-hidden ">

    <div className=" w-6/12 h-screen hidden md:flex  ">
      <img className="w-full h-full" src="./Rectangle 132.png" alt="" />
     <img className='absolute bottom-[220px]   md:left-[7%] lg:left-[12%] xl:left-[15%]' src="./Groupwhite.png" alt="" />
      <img className='absolute bottom-[210px]   md:left-[30%] lg:left-[28%] xl:left-[30%]' src="./Queretaro.png" alt="" />
    </div>
    
    <div className="max-w-md mx-auto">
        <div className='w-full sm:h-42 flex justify-center items-center mt-16 mb-10'>
            <img className='' src="./logoblue.png" alt="" />
        </div>

        <div className='md:w-3/4  w-11/12 flex-col m-auto  overflow-hidden'>
            <h1 className='bg-red text-h500-T pb-3'>Sign up</h1>
            <p className='pb-8 text-primary-gray'>Login with the data you entered during your registration.</p>
              <h2 className='pb-1 text-h500-S'>Email</h2>
              <label htmlFor="">
                <input className=' rounded-md border-solid border-2 h-10 w-full p-3 border-primary-blue pt-2' type="text" />
              </label>
              <div className='flex flex-row pt-4 pb-4'>
                <div className='w-6/12 pb-1 text-h500-S '>
                <label htmlFor="Name">Nombre
                <input className='rounded-md w-11/12  border-solid border-2 h-10 p-3 border-primary-blue pt-2' type="text" /></label>
                </div>
                <div className='w-6/12 pl-2  md:pl-7 pb-1 text-h500-S'>
                <label htmlFor="lastName">Apellido
                <input className=' rounded-md  w-full  md:w-full border-solid border-2 h-10  p-3 border-primary-blue pt-2' type="text" />
                </label>
                </div>
              </div>

              <h2 className='pb-1 text-h500-S'>Password</h2>
              <label htmlFor="">
                <input className='rounded-md border-2 w-full h-10 border-primary-blue p-3' type="password" />
              </label>

              <button className='w-full bg-primary-blue text-white rounded-md p-2 mt-5 ' >Crear cuenta</button>

                <p className='mt-6 w-full text-center text-h400-p text-primary-gray'>
                <a> <Link href='/login'>Or Log in</Link></a>
                  </p>
        </div>
      
      
    </div>
      
    </div>
  )
}

export default SignUp