import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  padding: 20px;
`;

export default HeaderStyles;
