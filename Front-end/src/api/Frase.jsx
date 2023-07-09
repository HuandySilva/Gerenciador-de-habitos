import axios from 'axios';
import { useState, useEffect } from 'react';
import './StylesApi/Frase.css'

function Frase() {
  const [dataFrase, setDataFrase] = useState(null);
  const [exibirFrase, setExibirFrase] = useState(false);

  const getDataFrase = async () => {
    try {
      const resposta = await axios.get("https://api.quotable.io/random");
      const resposta2 = await axios.get(`https://api.mymemory.translated.net/get?q=${resposta.data.content}&langpair=en|pt-br`);
      const traducao = resposta2.data.responseData.translatedText;
      console.log(traducao);
      setDataFrase(traducao);
      setExibirFrase(true);
      localStorage.setItem('fraseAtual', traducao); // Armazena a frase atual no localStorage
    } catch (error) {
      console.log("Erro na busca da frase");
    }
  };

  const atualizarFrase = () => {
    getDataFrase();
  };

  useEffect(() => {
    const fraseArmazenada = localStorage.getItem('fraseAtual');
    if (fraseArmazenada) {
      setDataFrase(fraseArmazenada);
      setExibirFrase(true);
    } else {
      getDataFrase();
    }
  }, []);

  return (
    <div className='Frase-Container'>
      {exibirFrase ? (
        <div className='Frase'>
          <p className='Frase-p'>{dataFrase}</p>
          <button className='Frase-button' onClick={atualizarFrase}>
            Nova frase
          </button>
        </div>
      ) : (
        <p className='Frase-buscando'>Buscando Frase...</p>
      )}
    </div>
  );
}

export default Frase;
