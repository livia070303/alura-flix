import Cabecalho from "../Componentes/Cabecalho";
import Banner from "../Componentes/Banner";
import Carrosel from "../Componentes/Carrosel";
import Videos from "../Componentes/Videos";
import { useEffect, useState } from "react";
import Rodape from "../Componentes/Rodape";

function Home() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/livia070303/alura-flix/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(dados)
    })
  }, [])

    return (
        <>
          <Cabecalho renderizarBotao={true} /> 
          <Banner />
          <Carrosel first={true}>
            {
              video.filter((video) => video.categoria === 'Frontend').map(video => {
                return <Videos urlImagem={video.urlImagem} urlVideo={video.urlVideo} corDaBorda={video.corDaBorda}/>
              })
            }
            
          </Carrosel>
         
          <Carrosel temHeader={true} 
                    tituloHeader={"Data Science"} 
                    descHeader="Formação Data Science na Alura"
                    corDeFundo={"rgba(105, 149, 59, 1)"}
          >
            {
              video.filter((video) => video.categoria === 'DataScience').map(video => {
                return <Videos urlImagem={video.urlImagem} urlVideo={video.urlVideo} corDaBorda={video.corDaBorda}/>
              })
            }
          </Carrosel>

          <Carrosel temHeader={true} 
                    tituloHeader={"Mobile"} 
                    descHeader="Formação Mobile da Alura" 
                    corDeFundo={"rgba(255, 186, 5, 1)"}
          >
            {
              video.filter((video) => video.categoria === 'Mobile').map(video => {
                return <Videos urlImagem={video.urlImagem} urlVideo={video.urlVideo} corDaBorda={video.corDaBorda}/>
              })
            }
          </Carrosel>
          
          <Rodape />
        </>
    );
  }
  
  export default Home;