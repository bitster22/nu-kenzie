
import { useState } from 'react';
import { Form } from './components/Form'
import { Header } from './components/Header'
import { List } from './components/List'
import { TotalMoney } from './components/TotalMoney'
import { GlobalReset } from './style/reset';

function App() {
  const [moneyList, setMoneyList] = useState([]);

  return (
    <>
    <GlobalReset/>
      <Header/>
      <main>
        <section>
          <Form setMoneyList={setMoneyList} />
          <TotalMoney moneyList={moneyList}/>
        </section>
        <List moneyList={moneyList} setMoneyList={setMoneyList} />
      </main>
    </>
  )
}

export default App
