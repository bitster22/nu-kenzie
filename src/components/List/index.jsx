import { StyledHeadline2, StyledHeadline3 } from "../../style/typography";
import { Card } from "./Card";
import { StyledList, StyledSectionList } from "./style";

export const List = ({ moneyList, setMoneyList }) => {
  const removeMoneyList = (moneyId) => {
    setMoneyList((moneyList) =>
      moneyList.filter((money) => money.id !== moneyId)
    );
  };

  return (
    <StyledSectionList>
      <StyledHeadline3 className="sectionText">
        Resumo financeiro
      </StyledHeadline3>

      {moneyList.length > 0 ? (
        <StyledList>
          {moneyList.map((value) => (
            <Card
              key={value.id}
              value={value}
              removeMoneyList={removeMoneyList}
            />
          ))}
        </StyledList>
      ) : (
        <StyledHeadline2 className="noValues">
          Você ainda não possui nenhum lançamento
        </StyledHeadline2>
      )}
    </StyledSectionList>
  );
};
