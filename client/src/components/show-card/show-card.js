import React from 'react';
import { Link } from 'react-router-dom';
import MovieCardStyles from './show-card-styles';

const MovieCard = ({ id, name, image, rating, premiered }) => {

  function getYear(premiered) {
    if (premiered !== null) {
      const year = premiered.split("-")[0];
      return year;
    }

    return "N/A";
  }

  const medium = image !== null ? 
        image.medium 
            : 
        "https://res.cloudinary.com/chybesta123/image/upload/v1573968544/demo/No-image-found.jpg";
  
  return (
    <MovieCardStyles>
      <Link to={`/show/${id}`}>
        <div className="image-box">
          <img src={medium} alt={name} />
        </div>
        <div className="content">
          <div className="title">{name}</div>
          <div className="info">
            <div className="star"><i className="fas fa-star"></i>&nbsp;{ rating.average === null ? "N/A" : rating.average }</div>
            <div className="year">{getYear(premiered)}</div>
          </div>
        </div>
      </Link>
    </MovieCardStyles>
  )
}

export default MovieCard;
