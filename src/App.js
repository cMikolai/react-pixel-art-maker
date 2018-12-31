import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 10,
      width: 10,
      background: '#fff',
      cellColor: '#fff'
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const canvas = document.querySelector("#pixel_canvas");
    canvas.innerHTML = '';
    canvas.style.backgroundColor = 'white';

    for (let x = 0; x < this.state.height; x++) {
      let row = document.createElement("tr");
      canvas.appendChild(row);

      for (let y = 0; y < this.state.width; y++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
      }
    }
  }

  // Cell color
  handleCellColor = (color) => {
    this.setState({ cellColor: color.hex });
  }

  handleCellColorOnClick = (event) => {
    event.target.style.backgroundColor = this.state.cellColor;
  }

  // Table background color
  handleBackgroundColor = (color) => {
    this.setState({ background: color.hex });
  };

  // Remove color
  handleColorRemove = (event) => {
    event.target.style.backgroundColor = '';
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Pixel Art Maker</h1>
        </header>

        <div className="App-Content">
          <div className="App-Settings">
            <h2>Canvas Settings</h2>
            {/*<h3>Choose Grid Size</h3>*/}
            <form id="sizePicker">
              <label>
              Grid Height:
              <input
                type="number"
                id="input_height"
                name="height"
                min="1"
                value={this.state.height}
                onChange={this.handleChange} />
              </label>
              <br />
              <label>
              Grid Width:
              <input
                type="number"
                id="input_width"
                name="width"
                min="1"
                value={this.state.width}
                onChange={this.handleChange} />
              </label>
              <p>
              <input
                type="submit"
                id="input_submit"
                value="Create grid"
                onClick={this.handleSubmit} />
              </p>
            </form>

            <hr className="Separator" />

            <h3>Pick A Background Color</h3>
            <CirclePicker
              onChangeComplete={this.handleBackgroundColor}
            />

            <hr className="Separator" />

            <h3>Pick A Color</h3>
            <CirclePicker
              onChangeComplete={this.handleCellColor}
            />
            <p>Hint: Double click to remove a color</p>
          </div>

          <div className="Canvas">
            <h2>Design Canvas</h2>
            <table
              id="pixel_canvas"
              style={{backgroundColor: this.state.background}}
              onMouseDown={this.handleCellColorOnClick}
              onDoubleClick={this.handleColorRemove}>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default App;