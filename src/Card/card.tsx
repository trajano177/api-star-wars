import styles from './card.module.css';
import { api } from '../App';
import * as Dialog from '@radix-ui/react-dialog';


interface cardProps {
    person: api
    idPerson: number
}

export function Card({ person, idPerson }: cardProps) {
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger asChild>

                    <div className={styles.cards}>
                        <img src={`./person/${idPerson}.png`} />
                        <h3 style={{ color: 'white' }}>{person.name}</h3>
                        <p style={{ color: 'white' }}>{person.birth_year}</p>

                    </div>
                </Dialog.Trigger>
            </Dialog.Root>




        </>

    )
}