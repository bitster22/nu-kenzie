import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { GlobalReset } from "./style/reset";
import { GlobalStyles } from "./style/global";
import { StyledContainer } from "./style/grid";
import { StyledFlexBox } from "./style/pages/app";

export const App = () => {
  const [moneyList, setMoneyList] = useState([]);

  return (
    <>
      <GlobalStyles />
      <GlobalReset />
      <Header />
      <main>
        <StyledContainer>
          <StyledFlexBox>
            <section className="section">
              <Form setMoneyList={setMoneyList} />
              <TotalMoney moneyList={moneyList} />
            </section>
            <List moneyList={moneyList} setMoneyList={setMoneyList} />
          </StyledFlexBox>
        </StyledContainer>
      </main>
    </>
  );
}

export default App;
