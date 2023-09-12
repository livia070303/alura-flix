import Cabecalho from "../Componentes/Cabecalho";
import Banner from "../Componentes/Banner";
import Carrosel from "../Componentes/Carrosel";
import Videos from "../Componentes/Videos";

function Home() {
    return (
        <>
          <Cabecalho renderizarBotao={true} /> 
          <Banner />
          <Carrosel first={true} 
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
          />
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