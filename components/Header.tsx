import Image from 'next/image';
import img from '../public/Header.png';
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Image src={img} alt="header"></Image>
    </>
  );
};

export default Header;
