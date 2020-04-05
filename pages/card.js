import React from 'react';

import places from '../test-data/places.json';
import BusinessCard from '../components/BusinessCard';

const Card = () => {
  return (
    <div>
      <BusinessCard businessInfo={places[0]} />
    </div>
  );
};

export default Card;
