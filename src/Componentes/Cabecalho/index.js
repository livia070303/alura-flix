import styles from "./Cabecalho.module.css"
import logoMain from "../../assets/LogoMain.png"
import { useNavigate } from "react-router-dom";

export default function Cabecalho({renderizarBotao}){
    const navigate = useNavigate();
    const click = () => {
        navigate("/criarvideo");
    }
    const imagemNavigate = useNavigate();
    const clickDaImagem = () => {
        imagemNavigate("/");
    }
    return (
            <header className={styles.cabecalho}>
                <div>
                    <img onClick={clickDaImagem} src={logoMain} className={styles.logo} alt="Logo Alura Flix" />
                </div>
                {
                    renderizarBotao 
                    ? <button onClick={click} className={styles.botaoNovoVideo}>Novo vídeo</button>
                    : ''
                }
            </header>
    )
}