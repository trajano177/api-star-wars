import styles from './styles.module.css';
import foto from '../assets/star-wars.svg';

export function Home() {
    return(
        <div className={styles.card}>
            <img src={foto} />
        </div>
    )
}