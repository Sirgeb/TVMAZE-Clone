import styled from 'styled-components';

const CastCardStyles = styled.div`
  border-radius: 20px;
  width: 200px;
  height: 150px;
  margin-bottom: 20px;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px 20px 20px;
  }

  .cast-card-image-box {
    width:200px;
    height: 150px;
  }

  .cast-card-image-box img{
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

export default CastCardStyles;
