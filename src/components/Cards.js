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
              text='We design and develop Applications (Web,Mobile) for your enterprise needs. We also sell softwares from our partners'
              label='Software Development'
              // path='/services'
            />
            <CardItem
              src='images/cloud.jpg'
              text='We provide technical support for cloud data centers'
              label='Cloud Services'
              // path='/services'
            />
             <CardItem
              src='images/Networking.jpg'
              text='We design and implement enterprise grade networks for companies'
              label='Networking'
              // path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/servers.jpg'
              text='We provide technical support for different servers and Operating systems'
              label='Servers And Storages'
              // path='/services'
            />
            <CardItem
              src='images/security.jpg'
              text='We provide industry grade security for all our solutions'
              label='Security'
              // path='/products'
            />
            <CardItem
              src='images/supplies.png'
              text='We procure quality IT accessories for companies'
              label='Suppliers'
              // path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
