import styled from "styled-components";

export const StyledFlexBox = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 560px) {
    .section{
      width: 355px;
    }
  } 
`;
