import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Pixel Art Maker</h1>
        </header>

        <div className="App-Content">
          <div className="App-Settings">
            <h2>Choose Grid Size</h2>

            <hr className="Separator" />

            <h2>Pick A Color</h2>
            <input type="color" id="colorPicker" />
          </div>

          <div className="Canvas">
            <h2>Design Canvas</h2>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
