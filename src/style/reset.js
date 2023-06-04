import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
        border: none;
    }

    ul,ol{
        list-style: none;
    }

    input{
        outline: none;
        border: 0;
    }

    input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
    }
  
    input[type="number"] {
        -moz-appearance: textfield !important;
    }
`