import React, { Component } from 'react';
import './App.css';

// import components
import GameArea from './GameArea.component';
import Header from './Header.component';
import Footer from './Footer.component';

// import helpers
import { RANDOM_INT_UP_TO } from './lib';

class App extends Component {
  render() {

    // Generate the winning color
    const color = `rgb(${RANDOM_INT_UP_TO(255)},${RANDOM_INT_UP_TO(255)},${RANDOM_INT_UP_TO(255)})`
    return (
      <div className="App">
        <GameArea
          difficulty={'easy'}
          winner={() => alert('You Win!')}
          loser={() => alert('You lose!')}
          color={color}
        />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
