import React, { useState } from 'react';

const easyStart = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const easyAnswer = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const hardStart = [
  [1, 0, 3, 0, 0, 8, 0, 4, 5],
  [0, 8, 0, 2, 0, 0, 0, 6, 0],
  [9, 0, 0, 0, 4, 5, 3, 0, 0],
  [0, 7, 0, 4, 0, 0, 5, 0, 9],
  [0, 0, 1, 0, 8, 0, 2, 0, 0],
  [4, 0, 8, 0, 0, 2, 0, 1, 0],
  [0, 0, 6, 9, 2, 0, 0, 0, 7],
  [0, 1, 0, 0, 0, 7, 0, 3, 0],
  [7, 4, 0, 3, 0, 0, 8, 0, 2]
];

const hardAnswer = [
  [1, 2, 3, 6, 7, 8, 9, 4, 5],
  [5, 8, 4, 2, 3, 9, 7, 6, 1],
  [9, 6, 7, 1, 4, 5, 3, 2, 8],
  [3, 7, 2, 4, 6, 1, 5, 8, 9],
  [6, 9, 1, 5, 8, 3, 2, 7, 4],
  [4, 5, 8, 7, 9, 2, 6, 1, 3],
  [8, 3, 6, 9, 2, 4, 1, 5, 7],
  [2, 1, 9, 8, 5, 7, 4, 3, 6],
  [7, 4, 5, 3, 1, 6, 8, 9, 2]
];

function Sudoku() {
  const [start, setStart] = useState(easyStart);
  const [answer, setAnswer] = useState(easyAnswer);
  const [board, setBoard] = useState(easyStart);
  const [checked, setChecked] = useState(false);

  const loadGame = (newStart, newAnswer) => {
    setStart(newStart);
    setAnswer(newAnswer);
    setBoard(newStart);
    setChecked(false);
  };

  const makeDynamic = () => {
    const randomBoard = easyAnswer.map((row) =>
      row.map((num) => (Math.random() > 0.45 ? num : 0))
    );
    loadGame(randomBoard, easyAnswer);
  };

  const clickCell = (r, c) => {
    if (start[r][c] !== 0) return;

    const copy = board.map((row) => [...row]);
    if (copy[r][c] === 9) {
      copy[r][c] = 0;
    } else {
      copy[r][c] = copy[r][c] + 1;
    }

    setBoard(copy);
    setChecked(false);
  };

  return (
    <div className="box">
      <h2>9x9 Sudoku</h2>

      <div className="btns">
        <button onClick={() => loadGame(easyStart, easyAnswer)}>Easy</button>
        <button onClick={() => loadGame(hardStart, hardAnswer)}>Hard</button>
        <button onClick={makeDynamic}>Dynamic</button>
      </div>

      <div className="grid">
        {board.map((row, r) => (
          <div key={r} className="row">
            {row.map((num, c) => {
              let color = '';
              if (start[r][c] !== 0) {
                color = 'fixed';
              } else if (checked && num !== 0) {
                color = num === answer[r][c] ? 'right' : 'wrong';
              }

              return (
                <div
                  key={c}
                  onClick={() => clickCell(r, c)}
                  className={`cell ${c === 2 || c === 5 ? 'br' : ''} ${r === 2 || r === 5 ? 'bb' : ''} ${color}`}
                >
                  {num === 0 ? '' : num}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="btns">
        <button onClick={() => setChecked(true)}>Check Answer</button>
        <button onClick={() => loadGame(start, answer)}>Reset</button>
      </div>
    </div>
  );
}

export default Sudoku;