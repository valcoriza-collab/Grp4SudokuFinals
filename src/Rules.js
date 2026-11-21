import React from 'react';

function Rules({ setPage }) {
  return (
    <div className="box rules">
      <h2>How to Play Sudoku</h2>
      <p><b>1. Goal:</b> Fill all empty boxes in the 9x9 grid with numbers 1 to 9.</p>
      <p><b>2. Controls:</b> Click any white box to cycle numbers from 1 to 9.</p>
      <p><b>3. Row Rule:</b> Each row must contain 1 to 9 with no duplicates.</p>
      <p><b>4. Column Rule:</b> Each column must contain 1 to 9 with no duplicates.</p>
      <p><b>5. 3x3 Box Rule:</b> Each 3x3 square must contain 1 to 9 with no duplicates.</p>
      <p><b>6. Modes:</b> Choose Easy or Hard for static puzzles, or Dynamic for random starting numbers.</p>
      <p><b>7. Colors:</b> Gray boxes are locked, green means correct, and red means wrong.</p>
      <button className="back-btn" onClick={() => setPage('play')}>
        Back to Game
      </button>
    </div>
  );
}

export default Rules;