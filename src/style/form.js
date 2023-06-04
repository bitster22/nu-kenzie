import styled, { css } from "styled-components";

const InputDefaultStyles = css`
  font-weight: 400;
  padding: 1rem;
  border-radius: 0.5rem;
  height: 3.3rem;
  background-color: var(--color-grey-1);
  border: 0.125rem solid var(--color-grey-1);
  font-family: "Inter", sans-serif;
`;

export const StyledInput = styled.input`
  ${InputDefaultStyles};
  font-size: 1rem;
`;

export const StyledSelect = styled.select`
  ${InputDefaultStyles};
  color: var(--color-grey-3);
`;

export const StyledOption = styled.option`
  height: 2.1875rem;
`;
