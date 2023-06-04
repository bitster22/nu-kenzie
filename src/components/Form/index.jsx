import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledForm } from "./style";
import { StyledInput, StyledOption, StyledSelect } from "../../style/form";
import { StyledHelperText, StyledLabel } from "../../style/typography";
import { StyledButton } from "../../style/button";

export const Form = ({ setMoneyList }) => {
  const [description, setDescription] = useState("");
  const [moneyValue, setmoneyValue] = useState("");
  const [select, setSelect] = useState("");

  const addValueToList = () => {
    const newValue = { id: uuidv4(), description, moneyValue, select };
    setMoneyList((moneyList) => [...moneyList, newValue]);
  };

  const submit = (e) => {
    e.preventDefault();
    addValueToList();
    setDescription("");
    setmoneyValue("");
  };

  return (
    <StyledForm action="" onSubmit={submit}>
      <StyledLabel htmlFor="description">Descrição</StyledLabel>
      <StyledInput
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        placeholder="Digite aqui sua descrição"
      />
      <StyledHelperText>Ex: Compra de roupas</StyledHelperText>

      <StyledLabel htmlFor="value">Valor (R$)</StyledLabel>
      <StyledInput
        type="number"
        id="value"
        value={moneyValue}
        onChange={(e) => setmoneyValue(e.target.value)}
        required
      />

      <StyledLabel htmlFor="typeValue">Tipo de valor</StyledLabel>
      <StyledSelect
        id="typeValue"
        onChange={(e) => setSelect(e.target.value)}
        required
      >
        <StyledOption value="">Escolha uma das opções</StyledOption>
        <StyledOption value="Entrada">Entrada</StyledOption>
        <StyledOption value="Despesa">Despesa</StyledOption>
      </StyledSelect>
      <StyledButton>Inserir valor</StyledButton>
    </StyledForm>
  );
};
