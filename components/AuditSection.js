import { StyledContainer } from "../components/CommonStyles";
import styled from "styled-components";

const StyledAuditSection = styled.section``;

const AuditSection = () => {
  return (
    <StyledContainer>
      <StyledAuditSection>
        <h3>top audit scores</h3>
        <p>
          Search engines, business stakeholders, and end-users gauge a website’s
          value using metric tools like Google Lighthouse, which measures site
          performance, SEO, and accessibility. Performance is one of the most
          difficult scores to get to 100. This is especially true in a time when
          users demand JavaScript-heavy, highly-interactive web experiences. A
          Jamstack website, delivering SEO-friendly, lean & clean HTML in
          milliseconds, promises higher search-engine ranking and a more
          positive, responsive end-user experience.
        </p>
      </StyledAuditSection>
    </StyledContainer>
  );
};

export default AuditSection;
