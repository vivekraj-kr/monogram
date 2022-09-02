import { StyledContainer, StyledH2 } from "../components/CommonStyles";

import Image from "next/image";
import styled from "styled-components";

const StyledMidBannerContainer = styled.section`
  background-color: #ffffff;
`;

const StyledMidBanner = styled.section`
  color: #ffffff;
  padding-top: 93px;
  position: relative;
  height: 893px;
  margin: 0 -58px;
  background-image: url("/images/mid_banner.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1360px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    border-radius: 30px;
    margin: 0 auto;
    background-size: contain;
    height: auto;
    padding-top: 30px;
    background-position: center;
    background-size: cover;
  }
`;

const StyledMidBannerContent = styled.div`
  max-width: 622px;
  margin: 0 auto;
  text-align: center;
`;

const StyledMidBannerTitle = styled(StyledH2)`
  margin-bottom: 44px;
`;

const StyledMidBannerDescription = styled.p`
  font-size: 18px;
  line-height: 35px;
  max-width: 578px;
  margin: 0 auto;
`;

const StyledArrow = styled.div`
  position: absolute;
  top: 267px;
  right: 100px;

  @media (max-width: 768px) {
    position: static;
    text-align: center;
  }
`;

const StyledMidBannerImg = styled.div`
  width: 810px;
  height: 807px;
  position: absolute;
  bottom: -370px;
  transform: translateX(-50%);
  left: 50%;

  @media (max-width: 1280px) {
    width: 500px;
    height: 500px;
    position: relative;
    margin: 0 auto;
    transform: none;
    bottom: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    position: relative;
    margin: 0 auto;
    transform: none;
    bottom: -100px;
    left: 0;
  }
`;

const MidBanner = () => {
  return (
    <StyledMidBannerContainer>
      <StyledContainer>
        <StyledMidBanner>
          <StyledMidBannerContent>
            <StyledMidBannerTitle>javascript</StyledMidBannerTitle>
            <StyledMidBannerDescription>
              Statically generated pages are brought to life with client-side
              JavaScript libraries and frameworks, such as Algolia and Next.js.
            </StyledMidBannerDescription>
          </StyledMidBannerContent>
          <StyledArrow>
            <Image
              src="/images/squiggly_arrow.svg"
              alt=""
              height="467"
              width="248"
              objectFit="contain"
              priority
            />
          </StyledArrow>
          <StyledMidBannerImg>
            <Image src="/images/retro_computer.svg" alt="" layout="fill" />
          </StyledMidBannerImg>
        </StyledMidBanner>
      </StyledContainer>
    </StyledMidBannerContainer>
  );
};

export default MidBanner;
