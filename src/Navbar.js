import React from 'react';

function Navbar({ page, setPage }) {
  return (
    <nav className="nav">
      <b>Sudoku</b>
      <div>
        <button
          className={page === 'play' ? 'active' : ''}
          onClick={() => setPage('play')}
        >
          Play
        </button>
        <button
          className={page === 'rules' ? 'active' : ''}
          onClick={() => setPage('rules')}
        >
          Rules
        </button>
      </div>
    </nav>
  );
}

export default Navbar;