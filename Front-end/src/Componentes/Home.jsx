import React, { useState, useEffect } from 'react';
import '../Styles/Home.css'

import Calendario from '../api/Calendario'
import Frase from '../api/Frase'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function Home(){

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Dataset',
            },
        },
    };
    
    const labels = ['1', '2', '3', '4', '5', '6', '7'];
    const data = {
        labels,
        datasets: [
            {
                label: ['Hábitos de Julho'],
                data: labels.map((() => Math.floor(Math.random() * 100))),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'red',
                borderWidth: 1
            },
        ],
    };

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

    const [dataAtual, setDataAtual] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
          setDataAtual(new Date());
        }, 86400000);
        return () => clearInterval(timer);
    }, []);

    const formatarData = (data) => {
        const dia = data.getDate();
        const mes = data.getMonth() + 1; // Os meses são indexados a partir de zero
        const ano = data.getFullYear();
    
        return `${dia}/${mes}/${ano}`;
    };


    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const formattedHour = date.getHours();
            const formattedMinute = date.getMinutes();
            setHour(formattedHour);
            setMinute(formattedMinute);
        };

        updateTime(); // Atualiza a hora imediatamente

        // Atualiza a hora a cada minuto
        const intervalId = setInterval(updateTime, 60000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);


    return(
        <div className='Home-Container'>
            <section className='Home-section-habits'>
                <div className='Home-section-checklist'>
                    <h2 className='Home-checklist-h2'>Hábitos do dia {formatarData(dataAtual)}</h2>
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
                    Minha evolução
                    <Bar options={options} data={data} />
                </div>
            </section>
            <section className='Home-section-apis'>
                <div className='Home-horario'>
                    <p>{hour}</p> 
                    <p>{minute.toString().padStart(2, '0')}</p>
                </div>
                <div className='Home-section-calendario'>
                    <Calendario/>
                </div>
                <div className='Home-section-frase'>
                    <Frase/>
                </div>
                
            </section>
            
        </div>
    )
}