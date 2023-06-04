import styled, { css } from "styled-components";

const textStyles = css`
  font-family: "Inter", sans-serif;
`;

export const StyledLabel = styled.label`
  ${textStyles}
  color: var(--color-grey-4);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.375rem;
`;

export const StyledHelperText = styled.span`
  ${textStyles}
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: var(--color-grey-50);
`;

export const StyledHeadline3 = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-grey-4);
`;

export const StyledSmallText = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--color-grey-4);
`;
export const StyledHeadline2 = styled.h2`
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-grey-3);
`;
