import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Partners() {
  return (
    <div className='cards' id = 'partners'>
      <div className='cards__container'>
      <h1>Partners</h1>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/aws.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              // label='Software Development'
              path='/services'
            />
            <CardItem
              src='images/ibm.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              // label='Cloud Services'
              path='/services'
            />
             <CardItem
              src='images/microsoft.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              // label='Networking'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Partners;
