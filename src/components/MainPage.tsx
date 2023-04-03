import CatBackground from '../assets/images/bg-cat.webp';

function MainPage() {
  return (
    <div className="h-screen w-screen">
      <img
        src={CatBackground}
        alt="cat background"
        className="fixed top-20 right-0 z-0 w-2/3"
      />
      <div className="absolute top-1/2 left-0 z-10 w-1/2">
        <h1>ZDJĘCIA KOTKÓW TUTAJ</h1>
      </div>
      <div className="absolute right-16 top-2/3 z-10 w-1/2">
        <h1 className="top-1/2 right-0 text-right text-7xl font-bold text-gray-700">
          Tanie kotki, {<br />}Miaałfejcyjna jakość!
        </h1>
      </div>
    </div>
  );
}

export default MainPage;
