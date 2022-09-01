import { StyledContainer, StyledH2 } from "../components/CommonStyles";

import Image from "next/image";
import styled from "styled-components";

const StyledHeroBanner = styled.section`
  padding-top: 153px;
  padding-bottom: 41px;
  background-image: url("/images/hero_graphic.svg");
  background-repeat: no-repeat;
  background-position: 100% 153px;
  background-color: #ffffff;
  background-size: auto;

  @media (max-width: 768px) {
    background-position: center;
    text-align: center;
  }
`;

const StyledHeroBannerDesc = styled.p`
  max-width: 550px;
  margin-left: 62px;
  margin-top: 44px;
  line-height: 35px;
  font-size: 18px;
  color: #757575;

  @media (max-width: 768px) {
    margin: 30px auto;
    color: #222;
  }
`;

const StyledMouseline = styled.div`
  margin-left: 256px;
  margin-top: 87px;

  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
  }
`;

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <StyledContainer>
        <StyledH2>jamstack </StyledH2>
        <StyledHeroBannerDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue
          massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus
          vel pretium tempor ut dui vivamus sit.
        </StyledHeroBannerDesc>
        <StyledMouseline>
          <Image
            src="/images/mouse_line_dark.svg"
            alt=""
            height="574"
            width="84"
            objectFit="contain"
            priority
          />
        </StyledMouseline>
      </StyledContainer>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
