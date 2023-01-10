import styles from './card.module.css';
import { api } from '../App';


interface cardProps {
    person: api[]
}

export function Card({}: cardProps ) {
    return (
        <div className="card">

        <div className={styles.card}>
            <img src='#'/>
            <h3>{}</h3>
        </div>


        </div>
    )
}