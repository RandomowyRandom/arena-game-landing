import { useState } from 'react';

interface IProps {
  names: string[];
  prices: string[];
}

function CatNames(props: IProps) {
  const [index, setIndex] = useState<number>(0);

  setTimeout(() => {
    if (index < props.names.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, 5000);

  return (
    <div className="mt-3 text-center">
      <h3 className="mb-3 text-4xl font-bold text-gray-600">
        {props.names[index]}
      </h3>
      <hr className="m-auto h-1 w-3/4 rounded-xl border-none bg-gray-300" />
      <h4 className="text-3xl font-bold text-gray-600">
        {props.prices[index]}
      </h4>
    </div>
  );
}

export default CatNames;
