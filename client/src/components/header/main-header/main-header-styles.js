import styled from 'styled-components';

const MainHeaderStyles = styled.div`
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
  }

  .logo {
    font-size: 50px;
    flex:1;
    margin-left: 20px;
  }

  @media (max-width: 700px) {
    .logo {
      margin-left: 0;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  .nav {
    display: flex;
    flex: 5;
  }

  .nav ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 0;
  }

  .nav ul li {
    list-style: none;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    .head {
      flex-direction: column;
      margin-bottom: 80px;
      justify-content: space-between;
      width: 100%;
    }
    .nav ul li {
      margin-right: 20px;
      white-space: nowrap;
    }
  }

  .nav ul li:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.grey};
    text-decoration: underline;
  }
`;

export default MainHeaderStyles;
