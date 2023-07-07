import React, { useState } from 'react';
import '../Styles/Home.css'

export default function Home(){

    const [checklist, setCheklist] = useState({
        dormir: false,
        beberAgua: false,
        lerLivro: false,
        atividadeFisica: false,
        estudar: false
    })

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheklist((prevChecklist) => ({
            ...prevChecklist,
            [name]: checked

        }))
    }

    return(
        <div className='Home-Container'>
            <section className='Home-section-habits'>
                <div className='Home-section-checklist'>
                    <h2 className='Home-checklist-h2'>To do</h2>
                    <label className='Home-checklist-label'>
                        <p className='Home-checklist-emoji'>&#x1F6CC;</p>
                        Dormir de 6 a 8 horas
                        <input className='Home-checklist-input' type="checkbox" name="dormir" checked={checklist.dormir} onChange={handleCheckboxChange}/>
                    </label>
                    <br />
                    <label className='Home-checklist-label'>
                        <p className='Home-checklist-emoji'>&#x1F964;</p>
                        Beber 2 litros de água
                        <input className='Home-checklist-input' type="checkbox" name="beberAgua" checked={checklist.beberAgua} onChange={handleCheckboxChange}/>
                    </label>
                    <br />
                    <label className='Home-checklist-label'>
                        <p className='Home-checklist-emoji'>&#x1F4DA;</p>
                        Ler 10 páginas de um livro
                        <input className='Home-checklist-input' type="checkbox" name="lerLivro" checked={checklist.lerLivro} onChange={handleCheckboxChange}/> 
                    </label>
                    <br />
                    <label className='Home-checklist-label'>
                        <p className='Home-checklist-emoji'>&#x1F3CB;</p>
                        Realizar 30 minutos de atividade física
                        <input className='Home-checklist-input' type="checkbox" name="atividadeFisica" checked={checklist.atividadeFisica} onChange={handleCheckboxChange}/>
                    </label>
                    <br />
                    <label className='Home-checklist-label'>
                        <p className='Home-checklist-emoji'>&#x1F4BB;</p>
                        Estudar por 1 hora
                        <input className='Home-checklist-input' type="checkbox" name="estudar" checked={checklist.estudar} onChange={handleCheckboxChange}/>
                    </label>

                </div>
                <div className='Home-section-tabela'>
                    Dashbord
                </div>
            </section>
            <section className='Home-section-apis'>
                <div className='Home-section-filme'>Filme</div>
                <div className='Home-section-frase'>Frase</div>
            </section>
            
        </div>
    )
}