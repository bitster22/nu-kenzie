import styled, { css } from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  background-color: var(--color-grey-1);
  border-radius: 0.25rem;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${({ typeValue }) => {
    if (typeValue == "Entrada") {
      return css`
        border-left: solid var(--color-color-secondary);
      `;
    } else {
      return css`
        border-left: solid var(--color-grey-2);
      `;
    }
  }}

  @media (max-width: 400px) {
    flex-direction: column;
    button {
      max-width: 48px;
    }
  }

  span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
  }

  button {
    background-color: var(--color-grey-2);
    border-radius: 0.125rem;
    height: 1.1875rem;
    font-size: 0.625rem;
  }
`;
