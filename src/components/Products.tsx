import Product from './Product';
import SampleCat from '../assets/images/Cats/20230221_005356.jpg';

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
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
        <Product cena={5} image={SampleCat} imie="Grzegorz"></Product>
      </div>
    </div>
  );
}

export default Products;
