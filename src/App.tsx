import { useState, useEffect, ChangeEvent } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';
import './App.css';

type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const tempFilteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonster(tempFilteredMonster);
  }, [monsters, searchField])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
