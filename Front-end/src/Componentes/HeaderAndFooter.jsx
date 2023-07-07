import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import logo from '../assets/habits.png'
import '../Styles/HeaderAndFooter.css'
import Clima from '../api/Clima'

export default function HeaderAndFooter() {

  return (
    <div className='HAF-Container'>
      <header className='HAF-Cabecalho'>
          <Link to="/home" className='HAF-Cabecalho-link-logo'>
            <img src={logo} alt="Logo Habits" className='HAF-Cabecalho-logo'/>
            <p className='HAF-Cabecalho-p'>Habits</p>
          </Link>
          <div className='HAF-Cabecalho-clima'>
            <Clima/>
          </div>
          <Link to='/' className='HAF-Cabecalho-link-sair'>Log out</Link>
      </header>
      <Outlet/>
      <footer className='HAF-Rodape'>
          <Link to='/home/know-more' className='HAF-Rodape-link'>Saiba Mais</Link>
          <img src={logo} alt="Logo Habits" className='HAF-Rodape-logo'/>
      </footer>
    </div>
  )
}