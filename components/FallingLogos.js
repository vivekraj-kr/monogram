import { StyledContainer, StyledH2 } from "../components/CommonStyles";

import Image from "next/image";
import styled from "styled-components";

const StyledFallingLogosSection = styled.section`
  margin-top: -195px;
  background-color: #151515;
`;

const FallingLogos = () => {
  return (
    <StyledFallingLogosSection>
      <StyledContainer>
        <Image
          src="/images/nextjs.svg"
          alt=""
          height="360"
          width="307"
          objectFit="contain"
          priority
        />
        <Image
          src="/images/nextjs.svg"
          alt=""
          height="360"
          width="307"
          objectFit="contain"
          priority
        />
        <Image
          src="/images/nextjs.svg"
          alt=""
          height="360"
          width="307"
          objectFit="contain"
          priority
        />
        <Image
          src="/images/nextjs.svg"
          alt=""
          height="360"
          width="307"
          objectFit="contain"
          priority
        />
        <Image
          src="/images/nextjs.svg"
          alt=""
          height="360"
          width="307"
          objectFit="contain"
          priority
        />
        <Image
          src="/images/nextjs.svg"
          alt=""
          height="360"
          width="307"
          objectFit="contain"
          priority
        />
        <Image
          src="/images/nextjs.svg"
          alt=""
          height="360"
          width="307"
          objectFit="contain"
          priority
        />
        <Image
          src="/images/nextjs.svg"
          alt=""
          height="360"
          width="307"
          objectFit="contain"
          priority
        />
        <StyledH2>api</StyledH2>
        <p>
          At build time, a Jamstack website uses data from one or more APIs to
          generate markup. These APIs can be a headless CMS like Prismic, a
          database like Supabase, or even a local JSON file!
        </p>
        <Image
          src="/images/3D_circle.svg"
          alt=""
          height="914"
          width="914"
          objectFit="contain"
          priority
        />
      </StyledContainer>
    </StyledFallingLogosSection>
  );
};

export default FallingLogos;
