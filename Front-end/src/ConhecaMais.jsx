import fotoAna from './assets/Foto-Ana.png'
import fotoDaniel from './assets/Foto-Daniel.jpeg'
import fotoHuandy from './assets/Foto-Huandy.jpg'
import fotoLeticia from './assets/Foto-Letcia.jpeg'


export default function ConhecaMais(){
    return(
        <>
            
            <section>
                <h1>Sobre o Gerenciador de hábitos</h1>
                <p>O Gerenciador de hábitor foi selecionado para ser desenvolvido pelo grupo porque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium in animi recusandae incidunt dolorem quidem hic, praesentium ipsam fugit qui quibusdam, maxime facilis autem eveniet et nesciunt tenetur officia. Error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, molestias? Cumque, voluptas natus! Illum labore nostrum unde fuga dicta perferendis ea aspernatur ipsa et, esse eius maxime porro aut totam.
                </p>
            </section>

            <section>
                <h2>Sobre os integrantes da equipe</h2>
                <p>Os integrantes desse grupo são graduandos da <a href="https://unifei.edu.br/">Universasidade Federal de Itajubá (UNIFEI)</a>, sendo, expecificamente alunos do <a href="https://imc.unifei.edu.br/">Instituto de Matemática e Computação (IMC). </a></p>
                <section>
                    <div>
                        <figure>
                            <img src={fotoAna} alt="" />
                        </figure>
                        <h3>Ana Maisa</h3>
                        <p>Graduanda de Ciências da Computação</p>
                        <a href="">GitHub</a>
                        <a href="">Linkedin</a>
                    </div>
                    <div>
                        <figure>
                            <img src={fotoDaniel} alt="" />
                        </figure>
                        <h3>Daniel Gonzalez</h3>
                        <p>Graduando de Sistemas de Informação</p>
                        <a href="https://github.com/danigon1998">GitHub</a>
                        <a href="linkedin.com/in/daniel-gonzález-a5662b181">Linkedin</a>
                    </div>
                    <div>
                        <figure>
                            <img src={fotoHuandy} alt="" />
                        </figure>
                        <h3>Huandy Calini</h3>
                        <p>Graduanda de Sistemas de Informação</p>
                        <a href="https://github.com/HuandySilva">GitHub</a>
                        <a href="https://br.linkedin.com/in/huandy-silva">Linkedin</a>
                    </div>
                    <div>
                        <figure>
                            <img src={fotoLeticia} alt="" />
                        </figure>
                        <h3>Letícia Santos</h3>
                        <p>Graduanda de Sistemas de Informação</p>
                        <a href="https://github.com/leticiasants">GitHub</a>
                        <a href="https://br.linkedin.com/in/leticiasantss">Linkedin</a>
                    </div>
                    
                </section>
                
            </section>

        </>
    )
}