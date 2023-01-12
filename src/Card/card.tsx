import styles from './card.module.css';
import { api } from '../App';
import foto from '../assets/star-wars-2.svg';


interface cardProps {
    person: api
}

export function Card({ person }: cardProps) {
    return (
        <div className={styles.cards}>
            <h3 style={{color:'white'}}>{person.name}</h3>
            <img src={foto} />
        </div>
    )
}