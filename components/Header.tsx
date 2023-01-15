import Image from 'next/image';
import img from '../public/Header.png';
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Image src={img}></Image>
    </>
  );
};

export default Header;
