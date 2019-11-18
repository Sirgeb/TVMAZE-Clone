import React from 'react';

import CastCardStyles from './cast-card-styles';

const CastCard = ({person, character}) => {
  return (
    <CastCardStyles>
      <div className="cast-card-image-box">
        <img src={!person.image ? 
          "https://res.cloudinary.com/chybesta123/image/upload/v1573968544/demo/No-image-found.jpg" : person.image.medium} alt="cast" />
      </div>
      <div className="wrapper">
          <div className="cast-card-title">
            <strong>{person.name}</strong>
          </div>
          <div className="cast-card-subtitle">
            as {character.name}
          </div>
      </div>
    </CastCardStyles>
  )
}

export default CastCard;
