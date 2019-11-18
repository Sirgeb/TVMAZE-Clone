import styled from 'styled-components';

const CastStyles = styled.div`
  padding: 20px;

  h2 {
    margin: 20px 0;
    font-size: 24px;
  }
  
  .line {
    height: 0.5px;
    margin-top: 20px;
    border: 0.5px solid grey;
    width: 30%;
    background: #ccc;
  }

  .cast {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 60px;
  }
`;

export default CastStyles;
