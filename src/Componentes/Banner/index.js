import player from '../../assets/player.png'
import styles from './Banner.module.css'

export default function Banner(){
    return(
        <body>
            <div className={styles.banner}>
                <div className={styles.bannerFrontEnd}>
                    <div className={styles.texto}>
                        <button disabled className={styles.botaoFrontEnd}>Front End</button>

                        <h1 className={styles.titulo}>SEO com React</h1>

                        <p className={styles.paragrafo}>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.</p>

                    </div>
                
                    <div className={styles.player}>
                        <img src={player} className={styles.playerPrincipal}/>
                    </div>
                </div>
            </div>
        </body>
        
    )
}