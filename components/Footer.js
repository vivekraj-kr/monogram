import { StyledContainer } from "../components/CommonStyles";
import styled from "styled-components";

const StyledFooterContainer = styled(StyledContainer)`
  padding: 245px 0 158px;
`;

const StyledFooterText = styled.p`
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
`;

const StyledHeart = styled.span`
  display: block;
  text-align: center;
  color: #ff069c;
  font-size: 30px;
`;

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterText>
        This is a design test by Vivekraj K R for Monogram.
      </StyledFooterText>
      <StyledHeart> &#10084; </StyledHeart>
    </StyledFooterContainer>
  );
};

export default Footer;
