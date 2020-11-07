import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 2rem;
`;

function App() {
  return (
    <div className="App">
      <Titulo>Testando Styled Components</Titulo>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
