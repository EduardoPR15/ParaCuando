import React from 'react'
import Link from 'next/link'

const MultiStepFrom = () => {
  return (
    <div className='sm:flex ' >
        <div className='w-full sm:h-screen sm:w-64 sm:flex-col bg-primary-blue'>
            <div className='flex flex-col justify-center items-center m-auto w-2/3 sm:mt-24'>
                <img className='mt-6 w-36' src="./logowhite.png" alt="" />
                <img className='w-36' src="./Groupwhite.png" alt="" />
            </div>
            <h1 className='text-primary-yellow text-h500-T pl-6 mt-5 mb-5'>¡Bienvenido, creador!</h1>
            <p className='text-white w-3/4 ml-6 text-h500-p'>A continuación puedes completar la info de la marca, artista o torneo que quieres cerca.</p>
        </div>
        <div className='w-11/12 m-auto -mt-8' >
        <button className=' text-primary-blue text-h600 ml-6 mt-8'> <Link href='/'> Back</Link> </button>
        <div className='w-3/4 sm:w-8/12 sm:ml-40 h-2 m-auto mt-6 rounded-lg bg-primary-grayLight overflow-hidden'>
            <div className='bg-primary-blue w-4/6 h-8' ></div>
        </div>
        <div className=' pt-6 sm:w-6/12 w-11/12 mx-auto'>
        <h1 className='text-black text-h500-T '>Publicacion</h1>
        <p className='text-primary-gray mb-6'>Informacion basica</p>

          <div >
            <fieldset className='border-solid border-2 overflow-hidden rounded-lg w-full h-14 border-primary-gray'>
            <input className=' w-full  border-none h-full outline-none pl-5' type="text"/>
              <legend className='text-primary-gray ml-3'>Titulo de la Publicacion</legend>
              
            </fieldset>
          </div>
          <div className=' mt-3 '>
           <select name="Tipo" id="" className='w-full px-3 h-12 rounded-lg border-gray border-solid border-2'>
            <option selected className='bg-gray text-h500-S' ><p className='text-gray text-h500-S '>Tipo</p></option>
            <option value="MT">Marcas y tiendas</option>
            <option value="AC">Artistas y conciertos</option>
            <option value="T"> Torneos</option>
           </select>
          </div>
          <div className='mt-4'>
          <select name="Tipo" id="" className='px-3 w-full h-12 rounded-lg border-gray border-solid border-2'>
            <option selected className='bg-gray text-h500-S' ><p className='text-gray text-h500-S '>Categoria</p></option>
            <option value="R&A">Ropa y accesorios</option>
            <option value="SP">Deportes</option>
            <option value="CON">Conciertos</option>
            <option value="M&G">Meet & greet</option>
            <option value="E-SP">E-sports</option>
            <option value="TEC">Tecnologia</option>
            <option value="HOME">Hogar / Decoracion</option>
            <option value="SUPP">Abastecimiento</option>
           </select>


          </div>
          
          <div className='mt-4' >
            <fieldset className='border-solid border-2 rounded-lg w-full h-32 border-primary-gray'>
              <legend className='text-primary-gray ml-3'>¿Por qué lo recomiendas?</legend>
              <textarea className='w-full overflow-hidden outline-none resize-none px-3' name="descripcion" id="" rows={4} maxLength={300}></textarea>
            </fieldset>
          </div>
          <div >
            <fieldset className='border-solid border-2 overflow-hidden rounded-lg w-full h-14 border-primary-gray'>
            <input className=' w-full  border-none h-full outline-none pl-5' type="text"/>
              <legend className='text-primary-gray ml-3'>Link de referencia</legend>
            </fieldset>
          </div>
          <div className='flex justify-center mt-6 mb-6 sm:mb-1'>
            <button  className="bg-primary-blue text-primary-grayLighter text-h600 py-4 px-6 rounded-full "><Link href="/PublicacionImg">Siguiente</Link></button>
            </div>
            </div>
          </div>
  
    </div>
  )
}

export default MultiStepFrom