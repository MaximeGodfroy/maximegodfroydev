import {Link} from 'react-router-dom';
import styles from './ThreeBestProjects.module.css'
import nina from '../../assets/nina.webp'
import kasa from '../../assets/kasa.webp'
import node from '../../assets/node1.webp'

export default function ThreeBestProjects() {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.firstLine}>
                <Link to={`/mes-projets/id1`} className={styles.link}>
                <div className={styles.card}>
                    <img src={node} alt='projet backend' /> 
                    <div className={styles.titles}>
                        <h2>Mon Vieux Grimoire</h2>
                        <h3>Développement du back-end d'un site de notation de livres avec Node.js, Express et MongoDB</h3>
                    </div>
                </div>
            </Link>
            <Link to={`/mes-projets/id1`} className={styles.link}>
                <div className={styles.card}>
                    <img src={kasa} alt='projet kasa' /> 
                    <div className={styles.titles}>
                        <h2>Kasa</h2>
                        <h3>Création d'une appli web de location immobilière avec React</h3>
                    </div>
                </div>
            </Link>
            </div>
            <Link to={`/mes-projets/id1`} className={styles.link}>
                <div className={styles.card}>
                    <img src={nina} alt='projet photographe' /> 
                    <div className={styles.titles}>
                        <h2>Nina Carducci</h2>
                        <h3>Débuggage et optimisation d'un site de photographe</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}