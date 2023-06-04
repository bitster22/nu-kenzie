import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledSectionList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    width: 560px;
    width: clamp(350px, 40vw, 560px);
  }

  .sectionText {
    margin-bottom: 1rem;
  }
`;
