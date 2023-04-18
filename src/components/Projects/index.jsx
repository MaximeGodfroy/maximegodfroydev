import {Link} from 'react-router-dom';
import styles from './Projects.module.css'
import booki from '../../assets/booki.webp'
import booki6 from '../../assets/booki6.webp'
import mockup from '../../assets/mockup.png'

export default function Projects() {

    return (
        <div className={styles.cardContainer}>
            <Link to={`/mes-projets/id1`} className={styles.link}>
                <div className={styles.card}>
                    <img src={booki} alt='projet booki' /> 
                    <div className={styles.titles}>
                        <h2>Agence de voyages Booki</h2>
                        <h3>Intégration à partir d'une maquette d'un site responsive en HTML et CSS</h3>
                    </div>
                </div>
            </Link>
            <Link to={`/mes-projets/id2`} className={styles.link}>
                <div className={styles.card}>
                    <img src={booki6} alt='projet booki' /> 
                    <div className={styles.titles}>
                        <h2>Agence de voyages Booki</h2>
                        <h3>Intégration à partir d'une maquette d'un site responsive en HTML et CSS</h3>
                    </div>
                </div>
            </Link>
            <Link to={`/mes-projets/id3`} className={styles.link}>
                <div className={styles.card}>
                    <img src={mockup} alt='projet booki' /> 
                    <div className={styles.titles}>
                        <h2>Agence de voyages Booki</h2>
                        <h3>Intégration à partir d'une maquette d'un site responsive en HTML et CSS</h3>
                    </div>
                </div>
            </Link>
            <Link to={`/mes-projets/id4`} className={styles.link}>
                <div className={styles.card}>
                    <img src={booki} alt='projet booki' /> 
                    <div className={styles.titles}>
                        <h2>Agence de voyages Booki</h2>
                        <h3>Intégration à partir d'une maquette d'un site responsive en HTML et CSS</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}