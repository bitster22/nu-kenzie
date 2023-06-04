export const Card = ({value, removeMoneyList})=>{
    return(
        <li>
            <div>
                <h3>{value.description}</h3>
                <span>{value.select}</span>
            </div>
            <div>
                <span>R$ {Number(value.moneyValue.replace(",",".")).toFixed(2).toString().replace(".",",")}</span>
                <button onClick={()=> removeMoneyList(value.id)}>Excluir</button>
            </div>
        </li>
    )
}