import styled from 'styled-components';

const ShowsStyle = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  text-align: "center";

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

const Center = styled.div`
  margin: 0 auto;
`;


export {Center, ShowsStyle as default};
