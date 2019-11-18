import React from 'react';
import { Link } from 'react-router-dom';
import MovieGenreStyles from './movie-genre-styles';

const Genre = () => {

  return (
    <MovieGenreStyles>
      <div className="movie-genre">
          <ul>
            <li><Link to="/search/comedy">Comedy</Link></li>
            <li><Link to="/search/horror">Horror</Link></li>
            <li><Link to="/search/romance">Romance</Link></li>
            <li><Link to="/search/action">Action</Link></li>
            <li><Link to="/search/adventure">Adventure</Link></li>
            <li><Link to="/search/thriller">Thriller</Link></li>
            <li><Link to="/search/animation">Animation</Link></li>
          </ul>
        </div>
    </MovieGenreStyles>
  )
}

export default Genre;
