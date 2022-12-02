import  React, {useState} from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.css'


function TinderCards() {
    const [pets, setPets] = useState([
        {
            name: 'Rocky',
            url: 'https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_3x4.jpg'
        },
        {
            name: 'Max',
            url: 'https://static01.nyt.com/images/2022/05/10/science/28DOGS-BEHAVIOR1/28DOGS-BEHAVIOR1-mobileMasterAt3x.jpg'
        }
    ])

  return (
    <div>
        <div className='TinderCards__cardContainer'>
            {pets.map(pet => (
                <TinderCard className='swipe' key={pet.name} preventSwipe={['up', 'down']}>
                    <div 
                    style = {{
                        backgroundImage: `url(${pet.url})`
                    }}
                    className='card'
                    >
                        <h2>{pet.name}</h2>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards