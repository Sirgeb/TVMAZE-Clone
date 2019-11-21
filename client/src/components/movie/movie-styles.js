import styled from 'styled-components';

const MovieStyles = styled.div`
  padding: 20px;
  h1,h2 {
    font-size: 24px;
  }

  .movie-title, .movie-description {
    color: ${props => props.theme.colors.black};
  }

  .wrapper {
    display: flex;
    margin-bottom: 20px;
  }

  @media (max-width: 1000px) {
    .movie-title {
      text-align: center;
    }
    .wrapper {
      flex-direction: column;
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .movie-poster {
    display: flex;
    flex: 2;
    height: 300px;
  }


  .movie-poster img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  .movie-description {
    display: flex;
    flex: 5;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .movie-description p {
    padding: 10px 10px;
    text-align: justify;
  }

  @media (max-width: 1000px) { 
    .movie-description {
      padding: 0;
    }
  }
`;


export default MovieStyles;
