import styles from "./card.module.css";
import { api } from "../App";
import * as Dialog from "@radix-ui/react-dialog";

interface cardProps {
  person: api;
  idPerson: number;
}

export function Card({ person, idPerson }: cardProps) {
  return (
    <>
      <div className={styles.cards}>
        <img src={`./person/${idPerson}.png`} />
        <h3>{person.name}</h3>
        <p>{person.birth_year}</p>
      </div>
    </>
  );
}
