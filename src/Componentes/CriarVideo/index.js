import styles from './CriarVideo.module.css'
import Rodape from "../Rodape"
import Cabecalho from '../Cabecalho'
import { useNavigate } from 'react-router-dom';


export default function CriarVideo() {
    const navigate = useNavigate();
    const clicarEmCategoria = () => {
        navigate("/criarcategoria");
    }
    return(
        <>
            <Cabecalho />
            <div className={styles.criarVideo}>
                <h1 className={styles.titulo}>Novo Video</h1>

                <div className={styles.campoInputs}>
                    <input className={styles.inputs}   required placeholder='Titulo' />
                    <input className={styles.inputs}   required placeholder='Link do vídeo' />
                    <input className={styles.inputs}   required placeholder='Link da imagem do vídeo' />
                    <input className={styles.inputs}   required placeholder='Escolha uma categoria' />
                            
                    <textarea className={styles.descricao} placeholder="Descricao"></textarea>
                            
                    <input className={styles.inputCodigoSeguranca} required placeholder='Código de segurança' />

                    <div className={styles.campoBotao}>
                        <button className={styles.botaoSalvar}>Salvar</button>
                        <button className={styles.botaoLimpar}>Limpar</button>
                        <button onClick={clicarEmCategoria} className={styles.botaoCategoria}>Nova categoria</button>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
            
    )
}
    
