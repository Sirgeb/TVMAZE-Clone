import styled from 'styled-components';

const SubHeaderStyles = styled.div`
  .header-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100px;
    text-align: center;
    padding: 20px;
  }

  p {
    font-size: 40px;
    margin: 0;
    letter-spacing: 5px;
  }

  @media (max-width: 800px) {
    .header-info {
      margin-bottom: 0;
    }

    p {
      font-size: 22px;
    }
  }


  p:last-child {
    font-size: 16px;
  }
`;

export default SubHeaderStyles;
