import { StyledContainer, StyledH2 } from "../components/CommonStyles";

import styled from "styled-components";

const StyledMarkupSection = styled.section`
  background-color: #ffffff;
  min-height: 1359px;
  background-image: url("/images/block_graphic.svg"),
    url("/images/toppled_blocks.svg"), url("/images/wall_of_blocks.svg");
  background-position: 100% 0, 58px calc(100% - 264px), 0 100%;
  background-repeat: no-repeat;
`;

const StyledMarkupDescription = styled.p`
  max-width: 480px;
  margin-top: 70px;
  font-size: 24px;
  line-height: 162%;
  color: #414141;
`;

const MarkupSection = () => {
  return (
    <StyledMarkupSection>
      <StyledContainer>
        <StyledH2>markup</StyledH2>
        <StyledMarkupDescription>
          When ready for deployment, a static-site generator such as Astro or
          Next.js is used to compile the website. The end result is a collection
          of pre-rendered HTML pages that can be delivered lightning-fast over a
          CDN like Vercel’s Edge Network.
        </StyledMarkupDescription>
      </StyledContainer>
    </StyledMarkupSection>
  );
};

export default MarkupSection;
