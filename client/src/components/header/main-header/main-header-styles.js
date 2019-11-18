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

  .nav ul li:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.grey};
    text-decoration: underline;
  }
`;

export default MainHeaderStyles;
