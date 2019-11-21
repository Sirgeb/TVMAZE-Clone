import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  
  span {
    color: black;
    background: ${props => props.theme.colors.white};
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid ${props => props.theme.colors.grey};
    cursor: pointer;
  }

  span:first-child {
    margin-right: 20px;
  }

  span:hover {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
  }
`;

export default PaginationStyles;
