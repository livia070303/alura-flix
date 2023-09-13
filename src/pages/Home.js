import Cabecalho from "../Componentes/Cabecalho";
import Banner from "../Componentes/Banner";
import Carrosel from "../Componentes/Carrosel";
import Videos from "../Componentes/Videos";
import { useEffect, useState } from "react";

function Home() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/livia070303/alura-flix/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(dados)
    })
  })
  console.log(video)
    return (
        <>
          <Cabecalho renderizarBotao={true} /> 
          <Banner />
          <Carrosel first={true}>
            {
              video.map(video => {
                return <Videos urlImagem={video.urlImagem} urlVideo={video.urlVideo} corDaBorda={video.corDaBorda}/>
              })
            }
          </Carrosel>
         
          <Carrosel temHeader={true} 
                    tituloHeader={"Data Science"} 
                    descHeader="Formação Data Science na Alura" 
                    // listaVideo={[
                    //               <Videos urlImagem={}
                    //                       urlVideo={}
                    //                       corDaBorda={}/>,

                    //               <Videos urlImagem={}
                    //                       urlVideo={}
                    //                       corDaBorda={}/>,

                    //               <Videos urlImagem={}
                    //                       urlVideo={}
                    //                       corDaBorda={}/>,

                    //               <Videos urlImagem={}
                    //                       urlVideo={}
                    //                       corDaBorda={}/>
                    //             ]}
                    corDeFundo={"rgba(105, 149, 59, 1)"}
          />
          <Carrosel temHeader={true} 
                    tituloHeader={"Mobile"} 
                    descHeader="Formação Mobile da Alura" 
                    listaVideo={[
                                  <Videos />,
                                  <Videos />,
                                  <Videos />,
                                  <Videos />
                                ]}
                    corDeFundo={"rgba(255, 186, 5, 1)"}
          />
        </>
        
        
      
    );
  }
  
  export default Home;