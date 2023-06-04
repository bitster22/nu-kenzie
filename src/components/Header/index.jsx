import nuKenzie from "../../assets/NuKenzie.png";
import { StyledContainer } from "../../style/grid";
import { StyledHeader } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={nuKenzie} alt="Logo da Nu Kenzie" />
      </StyledContainer>
    </StyledHeader>
  );
};
