import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';
const Layout = () => {
  return (
    <>
      <Header />
    <div className=''>

   
      <div className="flex flex-col px-6 py-6">
        <div className="py-6 sm:w-[900px] w-10/12 mx-auto">
          <p className="text-[#1A1E2E] text-9xl font-sans font-semibold text-h600 leading-7 not-italic">
            Populares en Queretano
          </p>
          <p className="text-[#6E6A6C] font-normal leading-5 text-base">
            Lo que las personas piden mas
          </p>
        </div>
        <div>
          <Slider />
        </div>
      </div>
      <div className="flex flex-col px-6 py-6">
        <div className="py-6 sm:w-[900px] w-10/12 mx-auto">
          <p className="text-[#1A1E2E] text-9xl  font-sans font-semibold text-h600 leading-7 not-italic">
            Sugerencias para ti
          </p>
          <p className="text-[#6E6A6C] font-normal leading-5 text-base">
            Publicaciones que podrias colaborar
          </p>
        </div>
        <div>
          <Slider />
        </div>
      </div>

      <div className="flex flex-col px-6 py-6">
        <div className="py-6 sm:w-[900px] w-10/12 mx-auto">
          <p className="text-[#1A1E2E] text-9xl  font-sans font-semibold text-h600 leading-7 not-italic">
            Recientes
          </p>
          <p className="text-[#6E6A6C] font-normal leading-5 text-base">
            las personas ultimamente estan hablando de esto
          </p>
        </div>
        <div>
          <Slider />
        </div>
      </div>

      <Footer />
      </div>
    </>
  );
};

export default Layout;
