import  React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import { database } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

import PetsIcon from '@mui/icons-material/Pets';

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
        },
        {
            name: 'Lulu',
            url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
        },
        {
            name: 'Bepo',
            url: 'https://people.com/thmb/5uLym456xzuJ5MwbPIdTJiyGoSE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(904x0:906x2)/pug-1-0d4c0f988e3d421ca4954917b1450664.jpg'
        },
        {
            name: 'Luna',
            url: 'https://static01.nyt.com/images/2022/06/21/well/15WELL-DOGS-CALM-KIDS2/15WELL-DOGS-CALM-KIDS2-mediumSquareAt3X.jpg'
        },
        {
            name: 'Superman',
            url: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg'
        },
    ])

    /*
    useEffect(() => {
        onSnapshot(collection(database, 'pets'), snapshot => {
           setPets(snapshot.docs.map(doc =>(
            
            {id: doc.id, data: doc.data()}
           )))
        })
        console.log(pets)
        
    }, []) 
    */
  
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
                        <h2><PetsIcon/>{pet.name}</h2>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards