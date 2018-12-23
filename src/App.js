import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    height: 1,
    width: 1,
  }
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Pixel Art Maker</h1>
        </header>

        <div className="App-Content">
          <div className="App-Settings">
            <h2>Choose Grid Size</h2>
            <form id="sizePicker">
              <p>Grid Height:
              <input type="number" id="input_height" name="height" min="1" value={this.state.height} /></p>
              <p>Grid Width:
              <input type="number" id="input_width" name="width" min="1" value={this.state.width} /></p>
              <p><input type="submit" id="input_submit" /></p>
            </form>

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
