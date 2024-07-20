import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background: radial-gradient( #fdfdfd , #44435e );
    box-sizing: inherit;
    color: #fff;
    background-repeat: no-repeat;
    overflow-x: hidden;
     
    &::-webkit-scrollbar{
        width: .8rem;
        background-color: #44435e;
    }
    
    &::-webkit-scrollbar-thumb{
        background-color: #2742b9;
        border-radius: 5px;
        width: .6rem;
    }
}

`

//background: radial-gradient( #414141 , #050b1d );