import styled from 'styled-components';

const MovieGenreStyles = styled.div`
  margin: 0 auto;
  .movie-genre {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

   ul li {
    list-style: none;
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.theme.colors.black};
    margin-right: 50px;
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

  @media (max-width: 700px) {
    ul li {
      margin-right: 10px;
      font-size: 12px;
    }

    ul li:nth-child(5), ul li:nth-child(6) {
      display: none;
    }
  }
`;

export default MovieGenreStyles;
