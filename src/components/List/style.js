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
  width: min(100%, 35rem);

  .sectionText {
    margin-bottom: 1rem;
  }

  .noValues{
    width: 100%;
  }

  @media (min-width: 560px) {
      .noValues{
        width: 355px;
      }
  }

  @media (min-width: 885px) {
    .noValues{
      width: 100%;
    }
  }
`;
