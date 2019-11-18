import React from 'react';

import CastCard from '../cast-card/cast-card';
import CastStyles from './cast-styles';

const Cast = ({ cast }) => {
  return (
    <CastStyles>
      <div className="line" />
      <h2>Cast</h2>
      <div className="cast">
        {
          cast && cast.map((castData) => (
            <CastCard key={castData.person.id} {...castData} />
          ))
        }
      </div>
    </CastStyles>
  )
}

export default Cast;
