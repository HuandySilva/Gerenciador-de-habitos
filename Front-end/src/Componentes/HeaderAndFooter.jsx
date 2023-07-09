import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../assets/habits.png';
import '../Styles/HeaderAndFooter.css';
import Clima from '../api/Clima';

export default function HeaderAndFooter() {
  const location = useLocation();

  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }, [location.pathname]);

  return (
    <div className='HAF-Container'>
      <header className='HAF-Cabecalho'>
        <Link to="/home" className='HAF-Cabecalho-link-logo'>
          <img src={logo} alt="Logo Habits" className='HAF-Cabecalho-logo' />
          <p className='HAF-Cabecalho-p'>Habits</p>
        </Link>
        <div className='HAF-Cabecalho-clima'>
          <Clima />
        </div>
        <Link to='/' className='HAF-Cabecalho-link-sair'>Sair</Link>
      </header>
      <div className="HAF-Content">
        <Outlet />
      </div>
      <footer className='HAF-Rodape'>
        <Link to='/home/know-more' className='HAF-Rodape-link'>Saiba Mais</Link>
        <img src={logo} alt="Logo Habits" className='HAF-Rodape-logo' />
      </footer>
    </div>
  );
}