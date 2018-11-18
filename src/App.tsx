import React, { Component } from 'react';
import './App.css';

// import component
import GameArea from './GameArea.component';
import Header from './Header.component';
import Footer from './Footer.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameArea />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
