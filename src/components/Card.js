import React from 'react';

const Card = ({ info }) => {
  return (
    <div className='card'>
      <div className='card__image-container'>
        <img src={`${info.image}`} alt='Character' className='card__image' />
      </div>
      <div className='card__info-container'>
        <h2 className='card__id'>
          {`#${info.name.toLowerCase().split(' ').join('')}ID${info.id}`}
        </h2>
        <h2 className='card__name'>
          {info.name}
          <span className={`card__status card__status-${info.status}`}>
            {info.status}
          </span>
        </h2>
        <ul className='card__list'>
          <li className='card__item'>Категория: {info.species}</li>
          <li className='card__item'>Пол: {info.gender}</li>
          <li className='card__item'>Начало: {info.origin.name}</li>
          <li className='card__item'>Местоположение: {info.location.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
