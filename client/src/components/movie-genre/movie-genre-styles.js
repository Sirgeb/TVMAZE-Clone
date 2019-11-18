import styled from 'styled-components';

const MovieGenreStyles = styled.div`
  .movie-genre {
    display: flex;
    justify-content: center;
  }

  .movie-genre ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0;
    padding: 0;
  }

  .movie-genre ul li {
    list-style: none;
    font-weight: 600;
    font-size: 14px;
  }

  a {
    color: ${props => props.theme.colors.black};
  }

  a:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
  }
`;

export default MovieGenreStyles;
