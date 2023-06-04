import { StyledHeadline3, StyledSmallText } from "../../style/typography";
import {
  StyledTotalMoney,
  StyledTotalValue,
  StyledTotalValueText,
} from "./styled";

export const TotalMoney = ({ moneyList }) => {
  const balance = moneyList.reduce((accValue, money) => {
    if (money.select == "Entrada") {
      return accValue + Number(money.moneyValue.replace(",", "."));
    } else {
      return accValue - Number(money.moneyValue.replace(",", "."));
    }
  }, 0);

  return (
    <StyledTotalMoney>
      <StyledTotalValue>
        <StyledHeadline3>Valor total:</StyledHeadline3>
        <StyledSmallText>O valor se refere ao saldo</StyledSmallText>
      </StyledTotalValue>
      <StyledTotalValueText>
        R$ {balance.toFixed(2).toString().replace(".", ",")}
      </StyledTotalValueText>
    </StyledTotalMoney>
  );
};
