import { Link, NavLink } from 'react-router-dom'
import styles from './Videos.module.css'

export default function Videos({urlVideo , urlImagem, corDaBorda }) {
    return (
        <div className={styles.videos}>
            <NavLink target='_blank' to={urlVideo} >
                <img src={urlImagem} style={{border:"2px solid " + corDaBorda }}/>
            </NavLink>
        </div>
    )
}