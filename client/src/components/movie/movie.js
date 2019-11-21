import React from 'react';

import MovieStyles from './movie-styles';

const Movie = ({ name, image, summary, genres, status, runtime, type, schedule }) => {

  return (
    <MovieStyles>
      <h1 className="movie-title">{name}</h1>
      <div className="wrapper">
        <div className="movie-poster">
          <img src={!image ? 
            "https://res.cloudinary.com/chybesta123/image/upload/v1573968544/demo/No-image-found.jpg"
            : image.medium} alt={name} />
        </div>
        <div 
          className="movie-description" 
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>

      <div className="show-info wrapper">
        <h2>Show Info</h2>
        <ul>  
            <li><strong>Runtime:</strong> {runtime} mins</li>
            <li><strong>Schedule:</strong> {schedule && schedule.days.map((day) => <span>{ day }</span>)} 
             {!schedule ? <span>N/A</span> : ` at ${schedule.time}` } </li>
            <li><strong>Status:</strong> {status} </li>
            <li><strong>Show Type:</strong> {type} </li>
            <li><strong>Genres:</strong> {genres ? genres.map(genre => <span>{genre} </span>) : <span>N/A</span>} </li>
        </ul>
      </div>
  </MovieStyles>
  )
}

export default Movie;
