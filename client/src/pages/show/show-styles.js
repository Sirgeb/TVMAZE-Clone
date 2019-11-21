import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;

  @media (max-width: 1000px) {
    width: auto;
  }
`;
