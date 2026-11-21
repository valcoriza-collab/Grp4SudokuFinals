import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sudoku from './Sudoku';
import Rules from './Rules';

function App() {
  const [page, setPage] = useState('play');

  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      {page === 'play' ? <Sudoku /> : <Rules setPage={setPage} />}
    </div>
  );
}

export default App;