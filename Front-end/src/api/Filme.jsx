import axios from 'axios'
import { useEffect,useState } from 'react';
import "../styles/Filme.css"

const Filme = () =>{
    const [dataFilme, setDataFilme] = useState(null)
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
        params: {
            list: 'most_pop_movies'
          },
        headers: {
          'X-RapidAPI-Key': 'defa17e4a6mshf5c8b5b9a31ee59p17997djsn4f9e204e8436',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      const getDataFilme = async() =>{
        try {
            const resposta = await axios.request(options);
            const filmes = resposta.data
            console.log(filmes)
            if(filmes.results.length > 0 && filmes){
                const randomInt = Math.floor(Math.random() * filmes.results.length) + 0;
                setDataFilme(filmes.results[randomInt])
            }
            else{
                console.log(`Não foi encontrado nenhum filme`)
            }
        } catch (error) {
            console.log("Erro na busqueda dos filmes")
        }
    }
    useEffect(() =>{
        getDataFilme()
    },[])

    return(
        <div className='filme'>
            {dataFilme?(
                <div className='containerFilme'>
                    <h2>Filme Recomendado para hoje</h2>
                    <img src={`${dataFilme.primaryImage.url}`} alt="" width={300}/>
                    <button onClick={getDataFilme}>Outro Filme</button>
                </div>
            ):(
                <button onClick={getDataFilme}>Outro Filme</button>
            )}
        </div>
    )
}

export default Filme