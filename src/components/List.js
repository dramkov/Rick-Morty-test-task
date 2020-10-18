import React from 'react';

import Card from './Card';

const List = (props) => {
  return (
    <div>
      <div className='heading-secondary'>В базе вселенной удалось найти :</div>
      <div className='card-list'>
        {props.characters.map((charachter) => {
          return <Card key={charachter.id} info={charachter} />;
        })}
      </div>
    </div>
  );
};

export default List;
