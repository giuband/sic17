import React, { Component } from 'react';
import playButton from './play-button.svg';
import pauseButton from './pause.svg';
import 'isomorphic-fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    const baseAddress = '//127.0.0.1:8001/';
    const address = this.state.isPlaying
      ? `${baseAddress}pause`
      : `${baseAddress}play`;
    fetch(address, { method: 'POST' })
      .then(response => response.json())
      .then(data => console.log(data));
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  render() {
    const iconSrc = this.state.isPlaying ? pauseButton : playButton;
    return (
      <div className="App">
        <div className="App-header">
          <h2>the enhanced dj assistant</h2>
        </div>
        <div className="App-content">
          <img
            src={iconSrc}
            className="App-controls"
            onClick={this.togglePlay}
          />
        </div>
      </div>
    );
  }
}

export default App;
