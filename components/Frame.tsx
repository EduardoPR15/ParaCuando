const Frame = () => {
  return (
    <div className="p-10">
      <h1 className="text-gray  text-9xl  font-sans font-semibold text-h500-T leading-8 not-italic">
        ¡Hagamoslo más personal!
      </h1>
      <p className="text-gray ">
        Selecciona tus interes para brindarte sugerencias de acuerdo a tus
        gustos
      </p>
      <div className="flex gap-5 ">
        <button className=" border border-[#A7A6A7] h-10 text-gray rounded-3xl px-2">
          Tiendas de ropa
        </button>
        <button className="border border-[#A7A6A7] h-10 text-gray  border-solid border-inherit rounded-3xl px-2 font-sans">
          Restaurantes
        </button>
        <button className="border border-[#A7A6A7] h-10 text-gray border-solid rounded-3xl  px-2 font-sans">
          Rock
        </button>
        <button className="border border-[#A7A6A7] h-10 text-gray  border-solid rounded-3xl  px-2 font-sans">
          Restaurantes
        </button>
        <button className="border border-[#A7A6A7] h-10 text-gray border-solid  rounded-3xl  px-2 font-sans">
          Restaurantes
        </button>
      </div>
      <p className=" pt-4 text-h600 text-primary-blue">
        Ver todos los intereses
      </p>
    </div>
  );
};

export default Frame;
