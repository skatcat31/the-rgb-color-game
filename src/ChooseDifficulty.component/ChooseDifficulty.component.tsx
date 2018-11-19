import React from 'react';
import './ChooseDifficulty.css';

interface chooseProps {
  score :number,
  oldDifficulty :string,
  selectDifficulty :(difficulty: string) => void,
  color :string
}

function ChooseDifficulty ({ color, score, oldDifficulty, selectDifficulty } :chooseProps) : JSX.Element {
  return (
    <div className="choose game">
      <h1>Select a difficulty</h1>
      <h2 className="big" style={{ background: 'green'}} onClick={() => selectDifficulty('easy')}>
        EASY
      </h2>
      <h2 className="big" style={{ background: 'orange'}} onClick={() => selectDifficulty('medium')}>
        MEDIUM
      </h2>
      <h2 className="big" style={{ background: 'red'}} onClick={() => selectDifficulty('hard')}>
        HARD
      </h2>
      {
        oldDifficulty === 'none'
        ? <h2>
          <br/>
          <span>{`${color}`}</span>
        </h2>
        : <h2>
          <br/>
          <span>{color}</span>
          <br />
          <span>{`${score} ${oldDifficulty.toUpperCase()}`}</span>
        </h2>
      }
    </div>
  );
}

export default ChooseDifficulty;