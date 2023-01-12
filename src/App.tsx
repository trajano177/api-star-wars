import { useState, useEffect, } from 'react';
import { Home } from './Home';
import { Card } from './Card/card';

import './global.css';
export interface api {

  name: string;
  height: number;
  mass: number;
  hair_color: string;
  eyer_color: string;
  birth_eyer: string;
}
export function App() {
  const url = 'https://swapi.dev/api/people/';
  const [people, setPeople] = useState<api[]>([]);
  const pessoas = Array.from(people);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setPeople(data.results);
    }

    fetchData();
  }, []);

  console.log('pessoas', pessoas);

  return <div className="App">
    <>
      <Home />
     

      
{/* 
      {people.map(people => {
        return (
          <Card key={people.name} person={people} />
        )
      })
      } */}
    </>
  </div>

}