import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowsAltH, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight, faArrowsAltH, faArrowsAltV);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 15,
      width: 15,
      background: '#fff',
      cellColor: '#000',
      mouseDown: false,
      menuVisible: true
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
    this.setState({ background: '#fff'});

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
    this.setState({ mouseDown: true });
  }

  handleMouseState = () => {
    this.setState({ mouseDown: false });
  }

  // Table background color
  handleBackgroundColor = (color) => {
    this.setState({ background: color.hex });
  };

  // Remove color
  handleColorRemove = (event) => {
    event.target.style.backgroundColor = '';
  }

  mobileMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  }

  // TODO: Separate into single components

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Pixel Art Maker</h1>
        </header>

        <div className="App-Content">
          {this.state.menuVisible
            ? <div className="App-Settings">

                <h2>Canvas Settings</h2>
                {/*<h3>Choose Grid Size</h3>*/}
                <form id="sizePicker">
                  <label>
                  <FontAwesomeIcon icon="arrows-alt-v" /> Grid Height:
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
                  <FontAwesomeIcon icon="arrows-alt-h" /> Grid Width:
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
                  color={ this.state.background }
                />

                <hr className="Separator" />

                <h3>Pick A Color</h3>
                <CirclePicker
                  onChangeComplete={this.handleCellColor}
                  color={ this.state.cellColor }
                />
                <p>Hint: Double click to remove a color</p>
              </div>
            : null
          }

          <div className={this.state.menuVisible ? "mobile-menu menu-open" : "mobile-menu menu-closed"}>
            <button className="show-settings" onClick={this.mobileMenu}>
              {this.state.menuVisible
                ? <FontAwesomeIcon icon="angle-left" size="lg" />
                : <FontAwesomeIcon icon="angle-right" size="lg" />
              }
            </button>
          </div>

          <div className={this.state.menuVisible ? "Canvas" : "Canvas full-width"}>
            <h2>Design Canvas</h2>
            <table
              id="pixel_canvas"
              style={{backgroundColor: this.state.background}}
              onMouseDown={this.handleCellColorOnClick}
              onMouseMove={this.state.mouseDown ? this.handleCellColorOnClick : null}
              onMouseUp={this.handleMouseState}
              onMouseLeave={this.handleMouseState}
              onTouchStart={this.handleCellColorOnClick}
              onTouchMove={this.state.mouseDown ? this.handleCellColorOnClick : null}
              onTouchEnd={this.handleMouseState}
              onDoubleClick={this.handleColorRemove}>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
