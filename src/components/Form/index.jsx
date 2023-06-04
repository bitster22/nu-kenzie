import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const Form = ({setMoneyList}) =>{

    const [description, setDescription] = useState("");
    const [moneyValue, setmoneyValue] = useState("");
    const [select, setSelect] = useState("");

    const addValueToList = () =>{
        const newValue = {id: uuidv4(),description, moneyValue, select};
        setMoneyList((moneyList)=>[...moneyList, newValue]);
    }

    const submit = (e) =>{
        e.preventDefault();
        addValueToList();
        setDescription("");
        setmoneyValue("");
    }

    return (
        <form action="" onSubmit={submit}>
            <label htmlFor="description">Descrição</label>
            <input type="text" id="description"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            required
             placeholder="Digite aqui sua descrição" />
            <span>Ex: Compra de roupas</span>

            <label htmlFor="value">Valor (R$)</label>
            <input type="number" id="value" 
            value={moneyValue}
            onChange={(e)=> setmoneyValue(e.target.value)}
            required
            />

            <label htmlFor="typeValue">Tipo de valor</label>
            <select id="typeValue" onChange={(e)=>setSelect(e.target.value)} required>
                <option value="">Escolha uma das opções</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
            <button>Inserir valor</button>
        </form>
    )
}
