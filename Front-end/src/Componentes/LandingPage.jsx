import { Link } from 'react-router-dom';
import logoHabits from '../assets/habits.png'
import '../Styles/LandingPage.css'

export default function LandingPage(){
    return(
        <div className='LandingPage'>
            <div className='LandingPage-Conteudo'>
                <div className='LandingPage-div-saibamais'>
                    <Link to="/know-more" className='LandingPage-link-saibamais'>Saiba Mais</Link>
                    <Link to="/login" className='LandingPage-link-login'>Login</Link>
                </div>
                <div className='LandingPage-Main'>
                    <div className='LandingPage-Informacoes'>
                        <h1 className='LandingPage-h1'>Gerenciador de Hábitos</h1>
                        <p className='LandingPage-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi fugit alias, commodi accusamus quos, debitis ratione a dolores molestiae.</p>
                        <Link to="/register-user" className='LandingPage-link-cadastro'>Cadastrar</Link>
                    </div>
                    <figure className='LandingPage-figure'>
                        <img src={logoHabits} alt="Logo do projeto Hábits" className='LandingPage-img'/>
                    </figure>
                </div>
            </div>
        </div>  
    )
}