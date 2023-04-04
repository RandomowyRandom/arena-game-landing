import Product from './Product';
import Cat1 from '../assets/images/Cats/20230202_024511.jpg';
import Cat2 from '../assets/images/Cats/20230207_001649.jpg';
import Cat3 from '../assets/images/Cats/20230207_001652.jpg';
import Cat4 from '../assets/images/Cats/20230207_104524.jpg';
import Cat5 from '../assets/images/Cats/20230207_104721.jpg';
import Cat6 from '../assets/images/Cats/20230210_100737.jpg';
import Cat7 from '../assets/images/Cats/20230211_135814.jpg';
import Cat8 from '../assets/images/Cats/20230213_120926.jpg';
import Cat9 from '../assets/images/Cats/20230213_162122.jpg';
import Cat10 from '../assets/images/Cats/20230213_162129.jpg';
import Cat11 from '../assets/images/Cats/20230213_162739.jpg';
import Cat12 from '../assets/images/Cats/20230214_100922.jpg';
import Cat13 from '../assets/images/Cats/20230214_101140.jpg';
import Cat14 from '../assets/images/Cats/20230215_140610.jpg';
import Cat15 from '../assets/images/Cats/20230215_141859.jpg';
import Cat16 from '../assets/images/Cats/20230216_133258.jpg';
import Cat17 from '../assets/images/Cats/20230216_133845.jpg';
import Cat18 from '../assets/images/Cats/20230217_235606.jpg';
import Cat19 from '../assets/images/Cats/20230217_235742.jpg';
import Cat20 from '../assets/images/Cats/20230217_235839.jpg';
import Cat21 from '../assets/images/Cats/20230218_142052.jpg';
import Cat22 from '../assets/images/Cats/20230220_145139.jpg';
import Cat23 from '../assets/images/Cats/20230220_145220.jpg';
import Cat24 from '../assets/images/Cats/20230221_005356.jpg';
import Cat25 from '../assets/images/Cats/20230227_122025.jpg';
import Cat26 from '../assets/images/Cats/20230303_000821.jpg';
import Cat27 from '../assets/images/Cats/20230303_002135.jpg';
import Cat28 from '../assets/images/Cats/20230310_084902.jpg';
import Cat29 from '../assets/images/Cats/20230313_145228.jpg';
import Cat30 from '../assets/images/Cats/20230316_135636.jpg';
import Cat31 from '../assets/images/Cats/20230317_033335.jpg';
import Cat32 from '../assets/images/Cats/20230324_232735.jpg';
import Cat33 from '../assets/images/Cats/20230328_084524.jpg';
import Cat34 from '../assets/images/Cats/20230329_133051.jpg';
import Cat35 from '../assets/images/Cats/20230329_225510.jpg';

function Products() {
  return (
    <div className="h-screen w-screen animate-fadeInTopBottom">
      <div className="float-left h-screen w-1/4 ">
        <div className="fixed top-1/3 left-0 h-full w-1/4">
          <h4 className="mt-32 mb-7 text-4xl font-bold text-gray-600">Cena</h4>
          <input
            className=" mb-0 select-none rounded  border-4 border-gray-300 pl-1 text-xl [appearance:textfield] focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            placeholder="Od"
            min={0}
          />
          <p className="text-4xl text-gray-600">-</p>
          <input
            className="[&::-webkit-inner-spin-button]:appearance-nonemb-8 select-none rounded border-4 border-gray-300 pl-1 text-xl [appearance:textfield] focus:outline-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            placeholder="Do"
            min={0}
          />
          <br />
          <button className="mt-28 rounded-2xl bg-pink-300 py-2 px-16 text-3xl font-bold text-white">
            Zastosuj
          </button>
        </div>
        <div className="fixed left-1/4 mt-72 h-2/3 w-1 rounded-xl bg-gray-300"></div>
      </div>
      <div className="float-left flex max-h-max w-3/4 flex-wrap justify-between pt-96 pl-24 pr-24">
        <Product cena={42} image={Cat1} imie="Kamil"></Product>
        <Product cena={30} image={Cat2} imie="Piotr"></Product>
        <Product cena={49} image={Cat3} imie="Oliwia"></Product>
        <Product cena={25} image={Cat4} imie="Jan"></Product>
        <Product cena={47} image={Cat5} imie="Magda"></Product>
        <Product cena={25} image={Cat6} imie="Karol"></Product>
        <Product cena={18} image={Cat7} imie="Iga"></Product>
        <Product cena={10} image={Cat8} imie="Kacper"></Product>
        <Product cena={33} image={Cat9} imie="Ania"></Product>
        <Product cena={14} image={Cat10} imie="Mikołaj"></Product>
        <Product cena={23} image={Cat11} imie="Aleksandra"></Product>
        <Product cena={32} image={Cat12} imie="Bartosz"></Product>
        <Product cena={28} image={Cat13} imie="Dawid"></Product>
        <Product cena={22} image={Cat14} imie="Zuzanna"></Product>
        <Product cena={27} image={Cat15} imie="Patryk"></Product>
        <Product cena={17} image={Cat16} imie="Julia"></Product>
        <Product cena={19} image={Cat17} imie="Tomasz"></Product>
        <Product cena={38} image={Cat18} imie="Kasia"></Product>
        <Product cena={13} image={Cat19} imie="Maciej"></Product>
        <Product cena={10} image={Cat20} imie="Natalia"></Product>
        <Product cena={25} image={Cat21} imie="Łukasz"></Product>
        <Product cena={14} image={Cat22} imie="Dominika"></Product>
        <Product cena={44} image={Cat23} imie="Michał"></Product>
        <Product cena={27} image={Cat24} imie="Monika"></Product>
        <Product cena={21} image={Cat25} imie="Adam"></Product>
        <Product cena={33} image={Cat26} imie="Kamila"></Product>
        <Product cena={21} image={Cat27} imie="Rafał"></Product>
        <Product cena={41} image={Cat28} imie="Weronika"></Product>
        <Product cena={15} image={Cat29} imie="Marek"></Product>
        <Product cena={36} image={Cat30} imie="Agata"></Product>
        <Product cena={33} image={Cat31} imie="Krzysztof"></Product>
        <Product cena={32} image={Cat32} imie="Sylwia"></Product>
        <Product cena={49} image={Cat33} imie="Artur"></Product>
        <Product cena={21} image={Cat34} imie="Kinga"></Product>
        <Product cena={37} image={Cat35} imie="Paweł"></Product>
      </div>
    </div>
  );
}

export default Products;
