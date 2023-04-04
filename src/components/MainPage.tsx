import CatBackground from '../assets/images/bg-cat.webp';
import PhotoGallery from './PhotoGallery';

import Cat1 from '../assets/images/Cats/20230207_001649.jpg';
import Cat2 from '../assets/images/Cats/20230207_104524.jpg';
import Cat3 from '../assets/images/Cats/20230329_225510.jpg';
import CatNames from './CatNames';

interface IProps {
  onSeeMoreClick: () => void;
}

function MainPage(props: IProps) {
  return (
    <div className="h-screen w-screen animate-fadeInTopBottom">
      <img
        src={CatBackground}
        alt="cat background"
        className="pointer-events-none fixed top-20 right-0 z-0 w-2/3"
      />
      <div className="absolute top-1/3 left-0 z-10 w-1/2">
        <div className="absolute left-1/3">
          <PhotoGallery images={[Cat1, Cat2, Cat3]}></PhotoGallery>
          <CatNames
            names={['Ryszard', 'Stefan', 'Elżbieta']}
            prices={['5,00zł', '10,00zł', '15,00zł']}
          ></CatNames>
          <button
            onClick={() => props.onSeeMoreClick()}
            className="mt-10 rounded-2xl bg-pink-300 py-3 px-6 text-4xl font-bold text-white"
          >
            Zobacz więcej!
          </button>
        </div>
      </div>
      <div className="absolute right-16 top-2/3 z-10 w-1/2">
        <h1 className="pointer-events-none top-1/2 right-0 select-none text-right text-7xl font-bold text-gray-700">
          Tanie kotki, {<br />}Miaałfakcyjna jakość!
        </h1>
      </div>
    </div>
  );
}

export default MainPage;
