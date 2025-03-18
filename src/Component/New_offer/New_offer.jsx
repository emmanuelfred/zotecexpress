import React, { useContext } from 'react'
import './New_offer.css'
import { LocationContext } from '../../Context/LocationContext';

function New_offer() {
  const { location } = useContext(LocationContext);
  return (
    <div className='New_offer container'>
        <div className="text-center">
        <h2>New Offers</h2>
        <p>Just For You</p>
        <p>You're viewing products for: {location.city}, {location.region}</p>

        </div>
       
        
    </div>
  )
}

export default New_offer