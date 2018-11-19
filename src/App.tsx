import React, { Component } from 'react';
import './App.css';

// import components
import GameArea from './GameArea.component';
import Header from './Header.component';
import Footer from './Footer.component';

// import helpers
import { RANDOM_RGB_STRING } from './lib';

// Private interfaces
interface gameState {
  score :number,
  difficulty :string
};

class App extends Component<object, gameState> {

  constructor (props :object) {
    super(props);

    // default state
    this.state = {
      score: 0,
      difficulty: 'easy'
    };

    this.winner = this.winner.bind(this);
    this.loser = this.loser.bind(this);
  }

  winner () :void {
    this.setState((state :gameState) :object => ({score: state.score + 1}));
  }

  loser () :void {
    this.setState({ score: 0 });
  }

  render() {

    // Generate the winning color
    const color = RANDOM_RGB_STRING();
    const { state: { score, difficulty }, winner, loser }= this;
    return (
      <div className="App">
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
