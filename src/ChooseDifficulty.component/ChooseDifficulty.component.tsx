import React from 'react';
import './ChooseDifficulty.css';

interface chooseProps {
  score :number,
  oldDifficulty :string,
  selectDifficulty :(difficulty: string) => void
}

function ChooseDifficulty ({ score, oldDifficulty, selectDifficulty } :chooseProps) : JSX.Element {
  return (
    <div className="choose game">
      <h1>Select a difficulty</h1>
      <h2 style={{ background: 'green'}} onClick={() => selectDifficulty('easy')}>
        EASY
      </h2>
      <h2 style={{ background: 'orange'}} onClick={() => selectDifficulty('medium')}>
        MEDIUM
      </h2>
      <h2 style={{ background: 'red'}} onClick={() => selectDifficulty('hard')}>
        HARD
      </h2>
      {
        oldDifficulty === 'none'
        ? null
        : <h2>
          <span>{`Difficulty: ${oldDifficulty}`}</span>
          <br />
          <span>{`Score: ${score}`}</span>
        </h2>
      }
    </div>
  );
}

export default ChooseDifficulty;