import img from '../public/Footer.png';
import Searcher from './Searcher';
type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="w-full bg-image im">
      <Searcher />
      <img className="w-full" src={img} alt="footer"></img>
    </div>
  );
};

export default Footer;
