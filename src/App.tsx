import { useState, useEffect } from 'react';
import { Home } from './Home';
import { Card } from './Card/card';

import './global.css';

const url = 'https://swapi.dev/api/people/';


export interface api {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  eyer_color: string;
  birth_eyer: number;
}
export function App() {
  const [people, setPeople] = useState<api[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setPeople(data);
    }

    fetchData();
  }, []);

  console.log(people);

  return <div className="App">
    <>
    <Home/>
    {/* {people.map(people => {
      return (
       <Card person={people}/>
      )
    })} */}
    </>
  </div>

}