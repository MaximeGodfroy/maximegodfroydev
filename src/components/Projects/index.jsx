import {Link} from 'react-router-dom';
import styles from './Projects.module.css'
import booki from '../../assets/booki.webp'
import sophie from '../../assets/sophie2.webp'
import notion from '../../assets/notion2.webp'
import nina from '../../assets/nina.webp'
import kasa from '../../assets/kasa.webp'
import node from '../../assets/node1.webp'
import ProjectsContainer from '../ProjectsContainer';

export default function Projects() {

    return (
        <ProjectsContainer>
          <div className={styles.cardContainer}>
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
            <Link to={`/mes-projets/id1`} className={styles.link}>
                <div className={styles.card}>
                    <img src={nina} alt='projet photographe' /> 
                    <div className={styles.titles}>
                        <h2>Nina Carducci</h2>
                        <h3>Débuggage et optimisation d'un site de photographe</h3>
                    </div>
                </div>
            </Link>
            <Link to={`/mes-projets/id2`} className={styles.link}>
                <div className={styles.card}>
                    <img src={notion} alt='projet MenuMaker' /> 
                    <div className={styles.titles}>
                        <h2>Gestion de projet agile</h2>
                        <h3>Planification d'un projet de création de menu pour des restaurateurs</h3>
                    </div>
                </div>
            </Link>
            <Link to={`/mes-projets/id3`} className={styles.link}>
                <div className={styles.card}>
                    <img src={sophie} alt='projet JavaScript' /> 
                    <div className={styles.titles}>
                        <h2>Architecte d'intérieur Sophie Bluel</h2>
                        <h3>Dynamisation d'un site et requêtes API avec JavaScript</h3>
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
        </ProjectsContainer>
        
    )
}