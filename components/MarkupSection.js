import { StyledContainer, StyledH2 } from "../components/CommonStyles";

import styled from "styled-components";

const StyledMarkupSection = styled.section`
  background-color: #ffffff;
  min-height: 1359px;
  background-image: url("/images/block_graphic.svg");
  background-position: 100% 0;
  background-repeat: no-repeat;
`;

const MarkupSection = () => {
  return (
    <StyledMarkupSection>
      <StyledContainer>
        <StyledH2>markup</StyledH2>
        <p>
          When ready for deployment, a static-site generator such as Astro or
          Next.js is used to compile the website. The end result is a collection
          of pre-rendered HTML pages that can be delivered lightning-fast over a
          CDN like Vercel’s Edge Network.
        </p>
      </StyledContainer>
    </StyledMarkupSection>
  );
};

export default MarkupSection;
