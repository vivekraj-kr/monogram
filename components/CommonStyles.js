import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1360px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 133px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export { StyledContainer, StyledH2 };
