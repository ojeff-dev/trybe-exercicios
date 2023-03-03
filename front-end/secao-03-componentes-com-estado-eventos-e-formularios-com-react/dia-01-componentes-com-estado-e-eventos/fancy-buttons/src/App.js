import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      clickBtn1: 0,
      clickBtn2: 0,
      clickBtn3: 0,
    };

    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
  }

  handleClickBtn1({ target }) {
    const { clickBtn1 } = this.state;
    this.setState({clickBtn1: clickBtn1 + 1}, () => {
      const clicks = this.state.clickBtn1;
      
      if (clicks % 2 === 0) {
        target.className = 'green';
      } else {
        target.className = '';
      }
    });
  }

  handleClickBtn2({ target }) {
    const { clickBtn2 } = this.state;
    this.setState({clickBtn2: clickBtn2 + 1}, () => {
      const clicks = this.state.clickBtn2;
      
      if (clicks % 2 === 0) {
        target.className = 'green';
      } else {
        target.className = '';
      }
    });
  }

  handleClickBtn3({ target }) {
    const { clickBtn3 } = this.state;
    this.setState({clickBtn3: clickBtn3 + 1}, () => {
      const clicks = this.state.clickBtn3;
      
      if (clicks % 2 === 0) {
        target.className = 'green';
      } else {
        target.className = '';
      }
    });
  }


  render() {
    return (
      <div className='App'>
        <h1> Exercise - Components whit State and Events</h1>
        <button
          onClick={this.handleClickBtn1}>
          {`Botão 1 - clicks: ${this.state.clickBtn1}`}
        </button>
        <button
          onClick={this.handleClickBtn2}>
          {`Botão 2 - clicks: ${this.state.clickBtn2}`}
        </button>
        <button
          onClick={this.handleClickBtn3}>
          {`Botão 3 - clicks: ${this.state.clickBtn3}`}
        </button>
      </div>
    );
  }
};

export default App;
