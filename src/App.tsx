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
      difficulty: ''
    };
  }

  render() {

    // Generate the winning color
    const color = RANDOM_RGB_STRING();
    return (
      <div className="App">
        <GameArea
          difficulty={'easy'}
          winner={() => alert('You Win!')}
          loser={() => alert('You lose!')}
          color={color}
        />
        <Header color={color}/>
        <Footer />
      </div>
    );
  }
}

export default App;
