export const TotalMoney = ({moneyList}) =>{

    const balance = moneyList.reduce((accValue, money)=>{
        if(money.select=="Entrada"){
            return accValue + Number(money.moneyValue.replace(",","."));
        }
        else{
            return accValue - Number(money.moneyValue.replace(",","."));
        }
    }, 0);

    return(
        <div>
            <div>
                <h3>Valor total:</h3>
                <p>O valor se refere ao saldo</p>
            </div>
            <span>R$ {balance.toFixed(2).toString().replace(".",",")}</span>
        </div>
    )
}