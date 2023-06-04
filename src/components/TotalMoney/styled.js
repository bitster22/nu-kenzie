import styled from "styled-components";

export const StyledTotalMoney = styled.div`
  border: 0.0625rem solid var(--color-grey-2);
  border-radius: 0.25rem;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 22.1875rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledTotalValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledTotalValueText = styled.span`
  font-weight: 700;
  color: var(--color-color-primary);
`;
