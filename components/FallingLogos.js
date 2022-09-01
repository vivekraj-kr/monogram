import { StyledContainer, StyledH2 } from "../components/CommonStyles";

import Image from "next/image";
import styled from "styled-components";

const StyledFallingLogosSection = styled.section`
  margin-top: -195px;
  background-color: #151515;
`;

const StyledFallingLogosText = styled.div`
  text-align: center;
  color: #ffffff;
  max-width: 730px;
  margin: 0 auto;
`;

const StyledFallingLogosPara = styled.p`
  font-size: 24px;
  line-height: 38.88px;
  margin-top: 63px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledLogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 100px;
  padding-top: 200px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledLogo = styled.div``;

const StyledLogo1 = styled(StyledLogo)`
  grid-area: 1 / 4;
`;
const StyledLogo2 = styled(StyledLogo)`
  grid-area: 2 / 1;
`;
const StyledLogo3 = styled(StyledLogo)`
  grid-area: 2 / 2;
`;
const StyledLogo4 = styled(StyledLogo)`
  grid-area: 2 / 4;
`;
const StyledLogo5 = styled(StyledLogo)`
  grid-area: 3 / 1;
`;
const StyledLogo6 = styled(StyledLogo)`
  grid-area: 3 / 3;
`;
const StyledLogo7 = styled(StyledLogo)`
  grid-area: 4 / 2;
  opacity: 0.1;
`;
const StyledLogo8 = styled(StyledLogo)`
  grid-area: 5 / 4;
  opacity: 0.1;
`;

const StyledSphere = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-left: -165px;
  margin-bottom: -418px;

  @media (max-width: 768px) {
    margin-left: -50px;
    margin-bottom: -50%;
  }
`;

const StyledInvertedBorderBlock = styled.div`
  height: 418px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const FallingLogos = () => {
  return (
    <StyledFallingLogosSection>
      <StyledContainer>
        <StyledLogoGrid>
          <StyledLogo1>
            <Image
              src="/images/nextjs.svg"
              alt=""
              height="360"
              width="307"
              objectFit="contain"
              priority
            />
          </StyledLogo1>
          <StyledLogo2>
            <Image
              src="/images/react.svg"
              alt=""
              height="341"
              width="383"
              objectFit="contain"
              priority
            />
          </StyledLogo2>
          <StyledLogo3>
            <Image
              src="/images/nextjs.svg"
              alt=""
              height="360"
              width="307"
              objectFit="contain"
              priority
            />
          </StyledLogo3>
          <StyledLogo4>
            <Image
              src="/images/react.svg"
              alt=""
              height="341"
              width="383"
              objectFit="contain"
              priority
            />
          </StyledLogo4>
          <StyledLogo5>
            <Image
              src="/images/svelte.svg"
              alt=""
              height="339"
              width="402"
              objectFit="contain"
              priority
            />
          </StyledLogo5>
          <StyledLogo6>
            <Image
              src="/images/vue.svg"
              alt=""
              height="351"
              width="362"
              objectFit="contain"
              priority
            />
          </StyledLogo6>
          <StyledLogo7>
            <Image
              src="/images/react.svg"
              alt=""
              height="341"
              width="383"
              objectFit="contain"
              priority
            />
          </StyledLogo7>
          <StyledLogo8>
            <Image
              src="/images/svelte.svg"
              alt=""
              height="339"
              width="402"
              objectFit="contain"
              priority
            />
          </StyledLogo8>
        </StyledLogoGrid>
        <StyledFallingLogosText>
          <StyledH2>api</StyledH2>
          <StyledFallingLogosPara>
            At build time, a Jamstack website uses data from one or more APIs to
            generate markup. These APIs can be a headless CMS like Prismic, a
            database like Supabase, or even a local JSON file!
          </StyledFallingLogosPara>
        </StyledFallingLogosText>
        <StyledSphere>
          <Image
            src="/images/3D_circle.svg"
            alt=""
            height="914"
            width="914"
            objectFit="contain"
            priority
          />
        </StyledSphere>
      </StyledContainer>
      <StyledInvertedBorderBlock />
    </StyledFallingLogosSection>
  );
};

export default FallingLogos;
