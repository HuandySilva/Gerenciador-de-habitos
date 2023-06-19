import { useState } from 'react';
import './App.css';
import SaibaMais from './SaibaMais';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (event) => {
    event.preventDefault();
    setLoggedIn(true);
  };

  return (
    <>
      {!loggedIn ? (
        <section className='Conteiner-Login'>
          <h2 className='h2-Login'>Login</h2>
          <form className='Form-Login'>
            <div className='Conteiner-Inputs'>
              <input type="email" placeholder='e-mail' className='Input-Login'/>
              <input type="password" placeholder='senha' className='Input-Login'/>
            </div>
            <div className='Conteiner-Buttons'>
              <button onClick={login} className='Button-Login'>Login</button>
              <button className='Button-CriarConta'>Criar Conta</button>
            </div>
          </form>
        </section>
      ) : (
        <SaibaMais />
      )}
    </>
  );
}

export default App;
