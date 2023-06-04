import { Card } from "./Card"

export const List = ({moneyList, setMoneyList})=>{

    const removeMoneyList = (moneyId) =>{
        setMoneyList((moneyList)=>moneyList.filter(money => money.id !==moneyId));
    }

    return(
        <section>
            <h3>Resumo financeiro</h3>
            <ul>
                {moneyList.map((value)=><Card key={value.id} value={value} removeMoneyList={removeMoneyList}/>)}
            </ul>
        </section>
    )
}
