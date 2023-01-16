import Searcher from './Searcher';
type Props = {};
const Footer = (props: Props) => {
  return (
    <div className=" bg-[url('../public/Footer.png')] h-[30.5rem] w-full flex items-center justify-center text-justify  bg-center pt-40 ">
      <Searcher />
    </div>
  );
};

export default Footer;
