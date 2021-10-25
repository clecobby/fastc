import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id = 'cards'>
      <div className='cards__container'>
      <h1>Enterprise Services and Solutions</h1>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/software.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Software Development'
              path='/services'
            />
            <CardItem
              src='images/cloud.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Cloud Services'
              path='/services'
            />
             <CardItem
              src='images/Networking.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Networking'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/servers.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Servers And Storages'
              path='/services'
            />
            <CardItem
              src='images/security.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Security'
              path='/products'
            />
            <CardItem
              src='images/supplies.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Suppliers'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
