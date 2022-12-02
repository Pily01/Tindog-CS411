
import  React, {useState} from 'react';
import TinderCard from 'react-tinder-card';


function TinderCards() {
    const [pets, setPets] = useState([
        {
            name: 'Rocky',
            image: 'https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_3x4.jpg'
        },
        {
            name: 'Max',
            image: 'https://static01.nyt.com/images/2022/05/10/science/28DOGS-BEHAVIOR1/28DOGS-BEHAVIOR1-mobileMasterAt3x.jpg'
        }
    ])

  return (
    <div>
        <h1> Tinder Cards</h1>
        {pets.map(pet => (
            <TinderCard className='swipe' key={pet.name} preventSwipe={['up', 'down']}>
                <div 
                style = {{
                    backgroundImage: `url(${pet.image})`
                }}
                className='card'
                >
                    {pet.name}
                </div>
            </TinderCard>
        ))}
    </div>
  )
}

export default TinderCards