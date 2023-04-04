import { useState } from 'react';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(
    <MainPage
      onSeeMoreClick={() => setCurrentPage(<Products></Products>)}
    ></MainPage>,
  );
  return (
    <div className="text-center selection:bg-pink-100">
      <Navbar
        onSeeMoreClick={() => setCurrentPage(<Products></Products>)}
        onSubpageChange={(page) => setCurrentPage(page)}
      ></Navbar>
      <div>{currentPage}</div>
    </div>
  );
}

export default App;
