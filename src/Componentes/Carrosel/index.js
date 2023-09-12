import styles from './Carrosel.module.css'
import Videos from '../Videos'
import ScrollContainer from 'react-indiana-drag-scroll'
export default function Carrosel({first, temHeader, tituloHeader, descHeader,listaVideo, corDeFundo }){

    return(
        <>

        {temHeader ?
                    <div className={styles.dataScience}>
                        <button className={styles.botaoDataScience} style={{backgroundColor: corDeFundo}}>{tituloHeader}</button>
                        <h1 className={styles.descricaoDataScience}>{descHeader}</h1>
                    </div>
                :    ""    
        }
            <ScrollContainer className={styles.carrosel} horizontal={true} style={{marginTop: first ? '-10%' : '0'}}>
                {listaVideo}
            </ScrollContainer>
        </>
            
    )
}