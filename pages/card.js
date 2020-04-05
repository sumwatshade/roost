import React from 'react';

import places from '../test-data/places.json';
import BusinessGrid from '../components/BusinessGrid';

const Card = () => {
  return (
    <div>
      <BusinessGrid places={places} />
    </div>
  );
};

export default Card;
