import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Buscador from './components/Buscador';
import { Loader } from './components/Loader';
import Navigation from './components/Navigation';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  return (
    <div className="App">
      <Navigation />
      <section className="App-section">
        {
          loading ? <Loader />
            :
            <>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>
                Buscador de Usuarios
              </h1>
              <Buscador />
            </>
        }
      </section>
    </div>
  );
}

export default App;
