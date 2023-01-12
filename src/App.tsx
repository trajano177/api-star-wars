import { useState, useEffect, } from 'react';
import { Home } from './Home';
import { Card } from './Card/card';
import './global.css';
import styles from './Card/card.module.css';
import axios from 'axios';

const url = `https://swapi.dev/api/people/`;
export interface api {

  name: string;
  height: number;
  mass: number;
  hair_color: string;
  eyer_color: string;
  birth_year: string;
}
export function App() {
  
  const [people, setPeople] = useState<api[]>([]);
 
   async function fetchData() {
      const res = await (await (axios.get(url).then())).data;

      setPeople(res.results);
    }
    useEffect(() => {
    fetchData()
  }, []);

    console.log('pessoas', people);

  return <div className="app">
    <>
      <Home />
     
      <div className={styles.map}>
        {people.map((people, i) => {
          return (
            <Card key={i} person={people} idPerson={i} />
          )
        })
        } 
      </div>
    </>
  </div>

}