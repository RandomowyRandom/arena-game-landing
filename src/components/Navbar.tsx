import Wave from '../assets/images/wave.png';
import Logo from '../assets/images/logo.webp';
import NavElement from './NavElement';
import FAQ from '../components/FAQ';
import MainPage from './MainPage';
import Products from './Products';

interface IProps {
  onSubpageChange: (subpage: JSX.Element) => void;
  onSeeMoreClick: () => void;
}

function Navbar(props: IProps) {
  return (
    <div className="top-0 z-10 w-screen">
      <img
        src={Wave}
        alt="wave background"
        className="pointer-events-none fixed z-10 w-screen"
      />
      <img
        src={Logo}
        alt="logo"
        className="pointer-events-none fixed top-10 left-10 z-20 w-20"
      />
      <h1 className="pointer-events-none fixed top-16 left-36 z-20 text-7xl font-semibold text-gray-600">
        TanieKotki.pl
      </h1>
      <div className="fixed top-16 right-20 z-30 flex w-1/4 flex-row justify-between">
        <NavElement
          subpage={
            <MainPage onSeeMoreClick={() => props.onSeeMoreClick()}></MainPage>
          }
          onClick={(page) => props.onSubpageChange(page)}
          text="Strona główna"
        ></NavElement>
        <NavElement
          subpage={<Products></Products>}
          text="Produkty"
          onClick={(page) => props.onSubpageChange(page)}
        ></NavElement>
        <NavElement
          subpage={<FAQ></FAQ>}
          text="FAQ"
          onClick={(page) => props.onSubpageChange(page)}
        ></NavElement>
      </div>
    </div>
  );
}

export default Navbar;
