import Image from 'next/image';
import img from '../public/Footer.png';
import Searcher from './Searcher';
type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="w-full bg-image im">
      <Searcher />
      <Image className="w-full" src={img} alt="footer"></Image>
    </div>
  );
};

export default Footer;
