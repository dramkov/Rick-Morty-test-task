import React, { useState, useEffect } from 'react';

import List from './List';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fechData();
  }, []);

  const fechData = async () => {
    let response = await fetch(`https://rickandmortyapi.com/api/character`);
    let data = await response.json();
    setCharacters(data.results);
  };

  const filteredCharacters = characters.filter((character) =>
    character.episode.includes(
      `https://rickandmortyapi.com/api/episode/${inputValue}`
    )
  );

  const finder = () => {
    if (inputValue === '' && characters.length > 0) {
      return <List characters={characters} />;
    } else if (filteredCharacters.length > 0) {
      return <List characters={filteredCharacters} />;
    }
    return (
      <div>
        <h2 className='heading-secondary'>Ничего не найдено</h2>
        <p className='heading-secondary--p'>
          Возможно, в далеких уголвках вселенной есть ответ,но не в этой
          маленькой части данных
        </p>
      </div>
    );
  };

  const inputValidation = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div>
      <header className='header'>
        <div className='header__container'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>Рик и Морти</span>
            <span className='heading-primary--sub'>Базы данных героев</span>
          </h1>

          <form className='header__form'>
            <input
              className='header__input'
              type='text'
              value={inputValue}
              placeholder='Введите номер серии'
              onChange={(e) => inputValidation(e)}
            />
          </form>
        </div>
      </header>

      <section className='main'>{finder()}</section>
    </div>
  );
};

export default App;
