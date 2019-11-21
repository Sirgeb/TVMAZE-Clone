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

export const Wrapper  = styled.div`
  margin-bottom: 40px;
`;