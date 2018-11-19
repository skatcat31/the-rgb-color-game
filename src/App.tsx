import React, { Component } from 'react';
import './App.css';

// import components
import GameArea from './GameArea.component';
import Header from './Header.component';
import Footer from './Footer.component';
import ChooseDifficulty from './ChooseDifficulty.component';

// import helpers
import { RANDOM_RGB_STRING } from './lib';

// Private interfaces
interface gameState {
  score :number,
  difficulty :string,
  oldDifficulty :string
};

class App extends Component<object, gameState> {

  constructor (props :object) {
    super(props);

    // default state
    this.state = {
      score: 0,
      difficulty: '',
      oldDifficulty: 'none'
    };

    this.winner = this.winner.bind(this);
    this.loser = this.loser.bind(this);
    this.selectDifficulty = this.selectDifficulty.bind(this);
  }

  winner () :void {
    this.setState(({ score } :gameState) :object => ({score: score + 1}));
  }

  loser () :void {
    this.setState(({ difficulty } :gameState) :object => ({ oldDifficulty: difficulty, difficulty: '' }));
  }

  selectDifficulty (difficulty :string) :void {
    this.setState({ difficulty, oldDifficulty: '', score: 0 });
  }

  render() {

    // Generate the winning color
    const color = RANDOM_RGB_STRING();

    // Retrieve variables from this
    const { state: { score, difficulty, oldDifficulty }, winner, loser }= this;

    return (
      ! difficulty
      ? <div className="App">
        <Header color={color}/>
        <ChooseDifficulty score={score} oldDifficulty={oldDifficulty} selectDifficulty={this.selectDifficulty}/>
      </div>
      : <div className="App">
        <GameArea
          difficulty={difficulty}
          winner={winner}
          loser={loser}
          color={color}
        />
        <Header color={color}/>
        <Footer score={score} difficulty={difficulty}/>
      </div>
    );
  }
}

export default App;
