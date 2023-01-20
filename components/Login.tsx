import React from 'react'

const Login = () => {
  return (
    <div className="w-full h-2/4 justify-center items-center flex flex-col sm:h-screen  sm:flex-row overflow-hidden ">

    <div className=" w-6/12 hidden sm:flex  ">
      <img className="w-full h-full" src="./Rectangle 133.png" alt="" />
      <img className='absolute bottom-1/4 right-3/4' src="./Groupwhite.png" alt="" />
      <img className='absolute bottom-1/4 left-96' src="./Queretaro.png" alt="" />
    </div>
    
    <div className="w-6/12 ">
        <div className='w-full sm:h-42 flex justify-center items-center mt-16 mb-10'>
            <img className='' src="./logoblue.png" alt="" />
        </div>

        <div className='md:w-3/4 md:ml-24'>
            <h1 className='bg-red text-h500-T pb-3'>Login</h1>
            <p className='pb-8 text-primary-gray'>Login with the data you entered during your registration.</p>
              <h2 className='pb-1 text-h500-S'>Email</h2>
              <label htmlFor="">
                <input className=' rounded-md border-solid border-2 h-10 w-full p-3 border-primary-blue pt-2' type="text" />
              </label>
              <h2 className='pb-1 text-h500-S textgr'>Password</h2>
              <label htmlFor="">
                <input className='rounded-md border-2 w-full h-10 border-primary-blue p-3' type="password" />
              </label>

              <button className='w-full bg-primary-blue text-white rounded-md p-2 mt-5 ' >Log in</button>

                <p className='mt-6 w-full text-center text-h400-p text-primary-gray'>
                <a href="">Did you forget your password?</a>
                  </p>
        </div>
      
      
    </div>
      
    </div>
  )
}

export default Login