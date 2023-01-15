type Props = {};
import vector from '../public/Vector.png';

const Searcher = (props: Props) => {
  return (
    <div className="w-465 h-46">
      <input
        type="text"
        rounded-lg
        className="focus:ring-2 
        
        focus:outline-none
        appearance-none
        w-full
        text-sm 
        leading-6 
        text-slate-600  
        rounded-sm py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
        placeholder="¿Qué quieres ver en tu ciudad?"
        aria-label={vector}
      />
    </div>
  );
};

export default Searcher;
