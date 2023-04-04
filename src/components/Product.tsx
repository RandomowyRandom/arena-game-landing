import cart from '../assets/images/Shopping-Cart.svg';
import heart from '../assets/images/heart.svg';
import heart_filled from '../assets/images/heart-fill.svg';
import { useState } from 'react';

interface IProps {
  image: string;
  imie: string;
  cena: number;
}

function Product(props: IProps) {
  const [serce, ustawserce] = useState<boolean>(true);
  const zmianaserce = () => {
    ustawserce(!serce);
    console.log(serce);
  };
  return (
    <div className="rouned relative m-1 h-96 text-left text-2xl font-bold text-gray-600">
      <img
        src={heart_filled}
        alt="serduszko"
        className="absolute top-0 right-0 w-10 cursor-pointer"
      />
      {serce && (
        <img
          onClick={zmianaserce}
          src={heart}
          alt="serduszko"
          className="absolute top-0 right-0 w-10 cursor-pointer"
        />
      )}
      {
        <img
          onClick={zmianaserce}
          src={heart}
          alt="serduszko"
          className="absolute top-0 right-0 w-10 cursor-pointer opacity-0"
        />
      }
      <img src={props.image} alt="Kotek" className="mb-3 h-64 w-64 rounded" />
      <span className="text-left text-3xl">{props.imie}</span>
      <hr className="my-2 h-1 w-4/5 rounded border-0 bg-gray-300" />
      <img src={cart} alt="cart" className="float-left w-10 cursor-pointer" />
      <p className="float-left ml-2 mt-1">{props.cena},00zł</p>
    </div>
  );
}

export default Product;
