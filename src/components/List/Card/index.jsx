import { StyledHeadline3, StyledSmallText } from "../../../style/typography";
import { StyledCard } from "./style";

export const Card = ({ value, removeMoneyList }) => {
  return (
    <StyledCard typeValue={value.select}>
      <div>
        <StyledHeadline3>{value.description}</StyledHeadline3>
        <StyledSmallText>{value.select}</StyledSmallText>
      </div>
      <div>
        <span>
          R${" "}
          {Number(value.moneyValue.replace(",", "."))
            .toFixed(2)
            .toString()
            .replace(".", ",")}
        </span>
        <button onClick={() => removeMoneyList(value.id)}>Excluir</button>
      </div>
    </StyledCard>
  );
};
