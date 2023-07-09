import fotoAna from '../assets/Foto-Ana.png'
import fotoDaniel from '../assets/Foto-Daniel.jpeg'
import fotoHuandy from '../assets/Foto-Huandy.jpg'
import fotoLeticia from '../assets/Foto-Leticia.jpeg'
import logo from '../assets/habits.png'
import '../Styles/KnowMore.css'

import { Link } from 'react-router-dom';

export default function KnowMore(){
    return(
        <div className='Container-Main'>
            <section className='Sobre-Habits'>
                <div className='Conteiner-Sobre'>
                    <h1 className='h1-SaibaMais'>Sobre o <span className='h1-span-SaibaMais'>Habits</span></h1>
                    <p className='Descricao-Habits'>O Habits é um eficiente gerenciador de hábitos projetado para simplificar e aprimorar sua rotina diária. Com recursos essenciais e intuitivos, o Habits reúne todas as informações e ferramentas necessárias para uma vida mais organizada em um único aplicativo. O ponto forte do Habits é o acompanhamento dos hábitos essenciais. Com uma lista pré-definida de hábitos, você pode marcar suas atividades concluídas e monitorar seu progresso. Essa funcionalidade é especialmente útil para cultivar e manter hábitos saudáveis em sua rotina diária.
                    E para ajudar na organização do seu dia, o Habits oferece um recurso de horário, calendário e clima, permitindo uma melhor distribuição do seu tempo e auxiliando no foco e na produtividade ao longo do dia.
                    </p>
                </div>
                <figure className='Logo-Habits'>
                    <img src={logo} alt="Logo do projeto Hábits" className='Logo-Habits-Img'/>
                </figure>
            </section>
            <section className='Explicacao-SaibaMais'>
                <div className='Porque-Usar'>
                    <h2 className='Porque-Usar-h2'>Por que usar?</h2>
                    <p className='Porque-Usar-p'>O Habits simplifica sua rotina diária, acompanhando seus hábitos e otimizando sua produtividade. Com calendário integrado, relógio, monitoramento de clima e recursos de acompanhamento de hábitos, o Habits oferece tudo que você precisa para alcançar seus objetivos em um único lugar. </p>
                </div>
                <div className='Ferramentas'>
                    <h2 className='Ferramentas-h2'>Ferramentas utilizadas</h2>
                    <div className='Ferramentas-listas'>
                        <div>
                            <h3>Front-end</h3>
                            <ul className='Ferramentas-ul'>
                                <li className='Ferramentas-il'>HTML</li>
                                <li className='Ferramentas-il'>CSS</li>
                                <li className='Ferramentas-il'>JavaScript</li>
                                <li className='Ferramentas-il'>React</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Back-end</h3>
                            <ul className='Ferramentas-ul'>
                                <li className='Ferramentas-il'>JAVA</li>
                                <li className='Ferramentas-il'>Spring-boot</li>
                            </ul>
                        </div>
                        <div>
                        <h3>Banco de Dados</h3>
                            <ul className='Ferramentas-ul'>
                                <li className='Ferramentas-il'>MongoDB Atlas</li>
                                <li className='Ferramentas-il'>Maven</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <section className='Devs-Habits'>
                <h2 className='h2-Devs'>Desenvolvedores</h2>
                <p className='Descricao-Geral'>Os integrantes desse grupo são graduandos da <a href="https://unifei.edu.br/" className='Link-Unifei'>Universasidade Federal de Itajubá (UNIFEI)</a>, sendo, expecificamente alunos do <a href="https://imc.unifei.edu.br/" className='Link-Imc'>Instituto de Matemática e Computação (IMC)</a>e abrangendo os cursos de Ciência da computação e sistemas de Informação. A equipe atuou de forma conjunta para elaborar os detalhes de design e definir as regras de negócio desta aplicação.</p>
                <section className='Devs-Descricao'>
                    <div className='Dev-Ana'>
                        <figure>
                            <img src={fotoAna} alt="Foto da desenvolvedora Ana Maísa" className='Devs-Foto'/>
                        </figure>
                        <h3 className='Devs-Nome'>Ana Maisa</h3>
                        <h4 className='Devs-graduacao'>Ciências da Computação</h4>
                        <p className='Devs-funcao'>Responsável pela integração entre as interfaces de usuário e o servidor Back-end.</p>
                        <div className='Devs-redes'>
                            <a href="https://github.com/AnaMaisaUnifei" className='Devs-GitHub'>GitHub</a>
                            <a href="https://br.linkedin.com/in/ana-ma%C3%ADsa-santos/" className='Devs-Linkedin'>Linkedin</a>
                        </div>
                    </div>
                    <div className='Dev-Daniel'>
                        <figure>
                            <img src={fotoDaniel} alt="Foto do desenvolvedor Daniel" className='Devs-Foto'/>
                        </figure>
                        <h3 className='Devs-Nome'>Daniel Gonzalez</h3>
                        <h4 className='Devs-graduacao'>Sistemas de Informação</h4>
                        <p className='Devs-funcao'>Pesquisa e integração de APIs de terceiros, alinhadas às regras de negócio, contribuindo para a seleção e codificação da integração no projeto.</p>
                        <div className='Devs-redes'>
                            <a href="https://github.com/danigon1998" className='Devs-GitHub'>GitHub</a>
                            <a href="https://br.linkedin.com/in/daniel-gonzález-a5662b181" className='Devs-Linkedin'>Linkedin</a>
                        </div>
                    </div>
                    <div className='Dev-Huandy'>
                        <figure>
                            <img src={fotoHuandy} alt="Foto da desenvolvedora Huandy" className='Devs-Foto'/>
                        </figure>
                        <h3 className='Devs-Nome'>Huandy Calini</h3>
                        <h4 className='Devs-graduacao'>Sistemas de Informação</h4>
                        <p className='Devs-funcao'> Responsável pela criação do servidor Back-end, bem como sua conecção com a base de dados da aplicação.</p>
                        <div className='Devs-redes'>
                            <a href="https://github.com/HuandySilva" className='Devs-GitHub'>GitHub</a>
                            <a href="https://br.linkedin.com/in/huandy-silva" className='Devs-Linkedin'>Linkedin</a>
                        </div>
                    </div>
                    <div className='Dev-Leticia'>
                        <figure>
                            <img src={fotoLeticia} alt="Foto da desenvolvedora Letícia" className='Devs-Foto'/>
                        </figure>
                        <h3 className='Devs-Nome'>Letícia Santos</h3>
                        <h4 className='Devs-graduacao'>Sistemas de Informação</h4>
                        <p className='Devs-funcao'>Desenvolvimento completo das interfaces de usuário, responsável por criar as páginas da aplicação e garantir a interligação entre elas.</p>
                        <div className='Devs-redes'>
                            <a href="https://github.com/leticiasants" className='Devs-GitHub'>GitHub</a>
                            <a href="https://br.linkedin.com/in/leticiasantss" className='Devs-Linkedin'>Linkedin</a>
                        </div>
                    </div>
                                
                </section>
            </section>
        </div>
    )
}