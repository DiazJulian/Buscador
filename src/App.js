import logo from './logo.svg';
import './App.css';
import Buscador from './Buscador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Buscador de Usuarios
        </h1>
        <Buscador />
      </header>
    </div>
  );
}

export default App;
