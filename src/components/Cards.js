import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Pick your side!</h1>
            .<div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/home-wildlife.jpeg"
              text='Explore the wild side of India'
              label='Wildlife'
              path='/services'
            />

            <CardItem
              src="images/home3.jpg"
              text='Travel through the Himalayan Mountains'
              label='Treks'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/home-kids.jpg'
              text='Outdoor Learning'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/home-sheetal.jpeg'
              text='Photo Blog'
              label='Adventure'
              path='/products'
            />
            {/* <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Cards
