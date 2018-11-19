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
  oldDifficulty :string,
  color :string
};

class App extends Component<object, gameState> {

  constructor (props :object) {
    super(props);

    // default state
    this.state = {
      score: 0,
      difficulty: '',
      oldDifficulty: 'none',
      color: RANDOM_RGB_STRING()
    };

    this.winner = this.winner.bind(this);
    this.loser = this.loser.bind(this);
    this.selectDifficulty = this.selectDifficulty.bind(this);
  }

  winner () :void {
    this.setState(({ score } :gameState) :object => ({score: score + 1, color: RANDOM_RGB_STRING() }));
  }

  loser () :void {
    this.setState(({ difficulty } :gameState) :object => ({ oldDifficulty: difficulty, difficulty: '' }));
  }

  selectDifficulty (difficulty :string) :void {
    this.setState({ difficulty, oldDifficulty: '', score: 0, color: RANDOM_RGB_STRING() });
  }

  render() {

    // Retrieve variables from this
    const { state: { score, difficulty, oldDifficulty, color }, winner, loser }= this;

    // Because the header is a single instance and consistent toward conditions, we should declare it once, use either
    const HEAD = <Header color={color} difficulty={ difficulty }/>;

    return (
      ! difficulty
      ? <div className="App">
        { HEAD }
        <ChooseDifficulty score={score} oldDifficulty={oldDifficulty} selectDifficulty={this.selectDifficulty} />
      </div>
      : <div className="App">
        <GameArea
          difficulty={difficulty}
          winner={winner}
          loser={loser}
          color={color}
        />
        { HEAD }
        <Footer score={score} difficulty={difficulty}/>
      </div>
    );
  }
}

export default App;
