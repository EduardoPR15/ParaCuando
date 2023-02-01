const Searcher = () => {
  return (
    <div className="w-11/12 sm:w-465 px-4 py-1">
      <input
        className="w-full border-2 border-gray rounded-full h-10 flex text-justify  items-center text-gray-50 bg-[url('../public/Vector1.png')] bg-no-repeat px-6 bg-auto bg-[95%]"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
    </div>
  );
};

export default Searcher;
