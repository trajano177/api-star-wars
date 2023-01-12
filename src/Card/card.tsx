import styles from './card.module.css';
import { api } from '../App';


interface cardProps {
    person: api
    idPerson: number
}

export function Card({ person, idPerson }: cardProps) {
    return (
        <>
        
            <div className={styles.cards}>
                <img src={`./person/${idPerson}.jpg`} />
                <h3 style={{ color: 'white' }}>{person.name}</h3>
                <p style={{ color: 'white' }}>{person.birth_year}</p>

            </div>
        </>

    )
}