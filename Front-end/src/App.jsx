import { useState } from 'react';
import SaibaMais from './SaibaMais';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (event) => {
    event.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className='Container'>
      {/* O conteúdo é renderizado se o usuário não estiver logado */}
        {!loggedIn ? (
          <section className='Container-Body'>
            <div className='Container-Login'>
            <h2 className='h2-Login'>Login</h2>
              <form className='Form-Login'>
                <div className='Container-Inputs'>
                  <input type="email" placeholder='e-mail' className='Input-Email'/>
                  <input type="password" placeholder='senha' className='Input-Senha'/>
                </div>
                <div className='Button-Ancora'>
                  <button onClick={login} className='Button-Login'>Entrar</button>
                  <a href='' className='Ancora-CriarConta'>Criar Conta</a>
                </div>
              </form>
            </div>
          </section>
        ) : (
          // Se o usuário estiver logado para de renderizar o componente App e passa a renderizar o componente SaibaMais
          <SaibaMais />
        )
      }
    </div>
  );
}

export default App;
