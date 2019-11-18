import styled from 'styled-components';

const SearchStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  margin: 0 auto ;
  text-align: center;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    padding: 3px 7px;
  }

  button:hover {
    cursor: pointer;
  }

  input {
    display: flex;
    width: 450px;
    padding: 5px;
    margin: 15px;
    height: 40px;
    outline:none;
    text-indent: 10px;
  }
`;

export default SearchStyles;
