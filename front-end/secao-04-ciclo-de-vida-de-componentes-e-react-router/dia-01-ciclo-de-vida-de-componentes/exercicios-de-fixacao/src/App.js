import React from 'react';
import './App.css';
import ShowUser from './components/ShowUser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person: '',
      loading: true,
    };
  }

  fetchAPI = async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();

    this.setState({
      person: data.results,
      loading: false,
    });
  };

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    const { person, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    return (
      <div className="App">
        <h1>Exercício 1</h1>
        <h2>Descrição</h2>
        <p>
          Crie uma aplicação que renderiza os dados de uma pessoa aleatória, que são obtidos por meio do retorno de uma API.
        </p>
        <p>
          A API utilizada será a 'randomuser' que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome results.
        </p>
        <h3>Resolução:</h3>
        {loading ? loadingElement
          : <ShowUser person={ person } />
        }
      </div>
    );
  }
}

export default App;
