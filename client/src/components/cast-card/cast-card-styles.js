import styled from 'styled-components';

const CastCardStyles = styled.div`
  margin: 0 auto;
  border-radius: 20px;
  width: 200px;
  height: 150px;
  margin-bottom: 40px;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .cast-card-image-box {
    width:200px;
    height: 150px;
  }

  @media (max-width: 700px) {
    width: 150px;

    .cast-card-image-box {
      width: 150px;
    }
  }


  .cast-card-image-box img{
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

export default CastCardStyles;
