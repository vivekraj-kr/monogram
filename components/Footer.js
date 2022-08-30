import { StyledContainer } from "../components/CommonStyles";
import styled from "styled-components";

const StyledHeart = styled.span`
  display: block;
  text-align: center;
  color: #ff069c;
  font-size: 30px;
`;

const Footer = () => {
  return (
    <StyledContainer>
      <p>This is a design test by Vivekraj K R for Monogram.</p>
      <StyledHeart> &#10084; </StyledHeart>
    </StyledContainer>
  );
};

export default Footer;
