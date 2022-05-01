import React, { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => setMonsters(monsters))
  }, []);

  useEffect(() => {
    const tempFilteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonster(tempFilteredMonster);
  }, [monsters, searchField])

  const handleChange = e => {
    setSearchField(e.target.value)
  };
  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder='Search monsters'
        handleChange={handleChange}
        />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
