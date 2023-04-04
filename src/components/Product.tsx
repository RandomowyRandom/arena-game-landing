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
  const [serce, ustawserce] = useState<boolean>(false);
  const zmianaserce = () => {
    ustawserce(!serce);
    console.log(serce);
  };
  return (
    <div className="relative m-1 h-80 w-40 rounded bg-pink-50 text-2xl font-bold text-gray-600">
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
      <img src={props.image} alt="Kotek" className="w-40 rounded" />
      <span className="my-1">{props.imie}</span>
      <hr className="my-2 mx-auto h-1 w-32 place-content-center rounded border-0 bg-gray-500" />
      <img src={cart} alt="wuzek" className="float-left w-10 cursor-pointer" />
      <span className="clear-both">{props.cena}zł</span>
    </div>
  );
}

export default Product;
