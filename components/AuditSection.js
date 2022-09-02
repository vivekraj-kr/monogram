import { StyledContainer } from "../components/CommonStyles";
import styled from "styled-components";

const StyledAuditSection = styled.section`
  max-width: 1204px;
  padding: 120px 77px;
  margin: -90px auto 0;
  background: linear-gradient(
    25.39deg,
    rgba(255, 255, 255, 0.024) 18.54%,
    rgba(123, 245, 93, 0.108) 62.25%
  );
  mix-blend-mode: normal;
  backdrop-filter: blur(120px);
  border-radius: 68px;
  color: #c7c7c7;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StyledAuditSectionTitle = styled.h3`
  color: #efffe2;
  font-size: 76px;
  margin-bottom: 96px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const StyledAuditScores = styled.div`
  display: flex;
  max-width: 1050px;
  justify-content: center;
  gap: 67px;
  margin-bottom: 128px;
  filter: drop-shadow(0px 0px 100px #7bf55d);

  @media (max-width: 1360px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StyledAuditScorItem = styled.div`
  opacity: 0.8;
  color: #efffe2;
  border: 4px solid #efffe2;
  box-shadow: 0px 0px 12px #53fb2a, 0px 0px 42px #e9e11f, 0px 0px 61px #53fb2a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 63px;
  text-shadow: 0px 0px 12px #53fb2a, 0px 0px 42px #e9e11f, 0px 0px 61px #53fb2a;
  border-radius: 100%;
  height: 212px;
  width: 212px;

  @media (max-width: 1280px) {
    height: 100px;
    width: 100px;
    font-weight: 400;
    font-size: 30px;
  }
`;

const StyledAuditSectionDescription = styled.p`
  max-width: 756px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 26px;
  mix-blend-mode: color-dodge;
  color: #c7c7c7;
  margin-bottom: 58px;
  line-height: 162%;
  opacity: 0.6;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const AuditSection = () => {
  return (
    <StyledContainer>
      <StyledAuditSection>
        <StyledAuditSectionTitle>top audit scores</StyledAuditSectionTitle>
        <StyledAuditScores>
          <StyledAuditScorItem> 100 </StyledAuditScorItem>
          <StyledAuditScorItem> 100 </StyledAuditScorItem>
          <StyledAuditScorItem> 100 </StyledAuditScorItem>
          <StyledAuditScorItem> 100 </StyledAuditScorItem>
        </StyledAuditScores>
        <StyledAuditSectionDescription>
          Search engines, business stakeholders, and end-users gauge a website’s
          value using metric tools like Google Lighthouse, which measures site
          performance, SEO, and accessibility.
        </StyledAuditSectionDescription>
        <StyledAuditSectionDescription>
          Performance is one of the most difficult scores to get to 100. This is
          especially true in a time when users demand JavaScript-heavy,
          highly-interactive web experiences.
        </StyledAuditSectionDescription>
        <StyledAuditSectionDescription>
          A Jamstack website, delivering SEO-friendly, lean & clean HTML in
          milliseconds, promises higher search-engine ranking and a more
          positive, responsive end-user experience.
        </StyledAuditSectionDescription>
      </StyledAuditSection>
    </StyledContainer>
  );
};

export default AuditSection;
