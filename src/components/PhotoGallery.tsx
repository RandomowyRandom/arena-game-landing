import { useState } from 'react';

interface IProps {
  images: string[];
}

function PhotoGallery(props: IProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  // change current image every 5 seconds
  setTimeout(() => {
    if (currentImage < props.images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  }, 5000);

  return (
    <div>
      <img
        className="h-64 w-96 rounded-3xl shadow-2xl"
        src={props.images[currentImage]}
        alt="photo gallery"
      />
    </div>
  );
}

export default PhotoGallery;
