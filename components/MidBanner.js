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
  background-size: auto;
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
`;

const StyledMidBannerImg = styled.div`
  width: 810px;
  position: absolute;
  bottom: -370px;
  transform: translateX(-50%);
  left: 50%;
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
            <Image
              src="/images/retro_computer.svg"
              alt=""
              height="807"
              width="810"
            />
          </StyledMidBannerImg>
        </StyledMidBanner>
      </StyledContainer>
    </StyledMidBannerContainer>
  );
};

export default MidBanner;
