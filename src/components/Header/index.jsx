import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <Link className={styles.title} to="/maximegodfroydev/accueil">
                <h1>Maxime GODFROY</h1>
            </Link>
            <nav className={styles.nav}>
                <NavLink to="/maximegodfroydev/accueil" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)} >
                    <span>ACCUEIL</span>
                </NavLink>
                <NavLink to="/maximegodfroydev/mes-projets" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)}>
                    <span>MES PROJETS</span>
                </NavLink>
                <NavLink to="/maximegodfroydev/cv" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)}>
                    <span>CV</span>
                </NavLink>
                <NavLink to="/maximegodfroydev/contact" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)}>
                    <span>CONTACT</span>
                </NavLink>
            </nav>
        </header>
    )
}