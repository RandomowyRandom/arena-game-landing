import { useState } from 'react';
import Navbar from './components/Navbar';

// use state hook to change current page

function App() {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(
    <div className="m-auto text-center">EMPTY PAGE</div>,
  );

  return (
    <div className="text-center selection:bg-pink-100">
      <Navbar onSubpageChange={(page) => setCurrentPage(page)}></Navbar>
      <div>{currentPage}</div>
    </div>
  );
}

export default App;
