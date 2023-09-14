import styles from "./Rodape.module.css"
import logoMain from "../../assets/LogoMain.png"
function Rodape(){
    return(
        <footer className={styles.rodape}>
            <img className={styles.logoRodape} src={logoMain} alt="Logo Alura Flix do rodape" />
        </footer>
    )
}

export default Rodape;