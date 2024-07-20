import React from "react";
import styled from "styled-components";
import { heightHeader } from "./Header";


export default function Separator() {
    return<Separador><Title>Nuestros Servicios</Title></Separador>
}

const Separador = styled.div`
    width: calc(100vw - .1rem);
    position: sticky;
    top: ${heightHeader};
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(175deg, #2742b9, #122680);
    z-index: 1;
    margin-top: 2rem;
`

const Title = styled.h2`
   color:  #ffffff;
`