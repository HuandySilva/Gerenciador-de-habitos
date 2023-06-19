import fotoAna from './assets/Foto-Ana.png'
import fotoDaniel from './assets/Foto-Daniel.jpeg'
import fotoHuandy from './assets/Foto-Huandy.jpg'
import fotoLeticia from './assets/Foto-Leticia.jpeg'
import logo from './assets/habits.png'
import './SaibaMais.css'

export default function SaibaMais(){
    return(
        <>
            <div className='SaibaMais-Habits'>
                <section className='Sobre-Habits'>
                    <h1 className='h1-SaibaMais'>Sobre o Habits</h1>
                    <div className='Conteiner-Sobre'>
                        <figure className='Logo-Habits'>
                            <img src={logo} alt="" className='Logo-Habits-Img'/>
                        </figure>
                        <p className='Descricao-Habits'>O Gerenciador de hábitor foi selecionado para ser desenvolvido pelo grupo porque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium in animi recusandae incidunt dolorem quidem hic, praesentium ipsam fugit qui quibusdam, maxime facilis autem eveniet et nesciunt tenetur officia. Error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, molestias? Cumque, voluptas natus! Illum labore nostrum unde fuga dicta perferendis ea aspernatur ipsa et, esse eius maxime porro aut totam.
                        </p>
                    </div>
                    
                </section>

                <section className='Devs-Habits'>
                    <h2 className='h2-Devs'>Desenvolvedores</h2>
                    <p className='Descricao-Geral'>Os integrantes desse grupo são graduandos da <a href="https://unifei.edu.br/" className='Link-Unifei'>Universasidade Federal de Itajubá (UNIFEI)</a>, sendo, expecificamente alunos do <a href="https://imc.unifei.edu.br/" className='Link-Imc'>Instituto de Matemática e Computação (IMC). </a></p>
                    <section className='Devs-Descricao'>
                        <div className='Devs-Descricao1'>
                            <div className='Dev-Ana'>
                                <figure>
                                    <img src={fotoAna} alt="" className='Devs-Foto'/>
                                </figure>
                                <h3 className='Devs-Nome'>Ana Maisa</h3>
                                <p className='Devs-graduacao'>Graduanda de Ciências da Computação</p>
                                <a href="" className='Devs-GitHub'>GitHub</a>
                                <a href="" className='Devs-Linkedin'>Linkedin</a>
                            </div>
                            <div className='Dev-Daniel'>
                                <figure>
                                    <img src={fotoDaniel} alt="" className='Devs-Foto'/>
                                </figure>
                                <h3 className='Devs-Nome'>Daniel Gonzalez</h3>
                                <p className='Devs-graduacao'>Graduando de Sistemas de Informação</p>
                                <a href="https://github.com/danigon1998" className='Devs-GitHub'>GitHub</a>
                                <a href="linkedin.com/in/daniel-gonzález-a5662b181" className='Devs-Linkedin'>Linkedin</a>
                            </div>
                        </div>

                        <div className='Devs-Descricao2'>
                            <div className='Dev-Huandy'>
                                <figure>
                                    <img src={fotoHuandy} alt="" className='Devs-Foto'/>
                                </figure>
                                <h3 className='Devs-Nome'>Huandy Calini</h3>
                                <p className='Devs-graduacao'>Graduanda de Sistemas de Informação</p>
                                <a href="https://github.com/HuandySilva" className='Devs-GitHub'>GitHub</a>
                                <a href="https://br.linkedin.com/in/huandy-silva" className='Devs-Linkedin'>Linkedin</a>
                            </div>
                            <div className='Dev-Leticia'>
                                <figure>
                                    <img src={fotoLeticia} alt="" className='Devs-Foto'/>
                                </figure>
                                <h3 className='Devs-Nome'>Letícia Santos</h3>
                                <p className='Devs-graduacao'>Graduanda de Sistemas de Informação</p>
                                <a href="https://github.com/leticiasants" className='Devs-GitHub'>GitHub</a>
                                <a href="https://br.linkedin.com/in/leticiasantss" className='Devs-Linkedin'>Linkedin</a>
                            </div>
                        </div>
                        
                        
                    </section>
                </section>
            </div>
        
        </>
    )
}