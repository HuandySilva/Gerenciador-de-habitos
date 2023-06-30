import axios from 'axios'
import { useState, useEffect  } from 'react'

function Frase() {

    const [dataFrase,setDataFrase] = useState(null)

    const getDataFrase = async () =>{
        try {
            const resposta = await axios.get("https://api.quotable.io/random")
            const resposta2 = await axios.get(`https://api.mymemory.translated.net/get?q=${resposta.data.content}&langpair=en|pt-br`)
            const traducao = resposta2.data.responseData.translatedText
            console.log(traducao) 
            setDataFrase(traducao)
        } catch (error) {
            console.log("Erro na busqueda da frase")
        }
    }

    useEffect(()=>{
        getDataFrase()
    },[])



  return (
    <div>
        {dataFrase?(
        <div>
            <h2>Frase do dia</h2>
            <p>{dataFrase}</p>
        </div>):(
            <p>Buscando Frase...</p>
        )}</div>
  )
}

export default Frase