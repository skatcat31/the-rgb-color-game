import React, { Component } from 'react';
import './GameArea.css';
import { RANDOM_INT_UP_TO, RANDOM_RGB_STRING } from '../lib';

interface gameProps {
  difficulty :string,
  color :string,
  winner :(event: any) => void,
  loser :(event: any) => void
}

const DIFFICULTY_LEVEL :{ [ difficulty :string ] :number} = {
  easy: 3,
  medium: 6,
  hard: 9
};

function INDEX_GRIDAREA (number :number) :string {
  return String.fromCharCode(97 + number);
}

function GameArea ({ difficulty, color, winner, loser } :gameProps) :JSX.Element {

  // Convert the difficulty from human to number of colors
  const LEVEL :number = DIFFICULTY_LEVEL[ difficulty ];

  // Comput an index to set the color to and assign winner to
  const WINNING_INDEX :number = RANDOM_INT_UP_TO(LEVEL);

  // Return interaction area
  return (
    <div className={`game playarea ${difficulty}`}>
      {
        // Generate interaction elements
        Array.from({ length: LEVEL }, (_, index) => {

          let notColor :string = RANDOM_RGB_STRING();

          while(notColor == color) {
            notColor = RANDOM_RGB_STRING();
          }

          // see if this is the winning ticket
          if (index == WINNING_INDEX) {
            return <div key={index} className="choice" style={{ backgroundColor: color, gridArea: INDEX_GRIDAREA(index)}} onClick={winner} />
          }

          // NOT winning ticket, should instead generate a hue shift of the color
          return <div key={index} className="choice" style ={{ backgroundColor: notColor, gridArea: INDEX_GRIDAREA(index)}} onClick={loser} />
        })
      }
    </div>
  );
}

export default GameArea;