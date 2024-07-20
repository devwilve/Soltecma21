import React from "react";
import styled from "styled-components";
import Sotial from "../components/Sotial";

export default function Contactanos(){
    return(
        
            <TabContainer>
            <Imagen src={process.env.PUBLIC_URL + `../../images/mail.svg`}/>
                <Container>
                    <Sotial type='whatsapp' info='+58 4129370984'/>
                    <Sotial type='instagram' info='@soltecma21'/>
                    <Sotial type='email' info='ventas@soltecma.com'/>
                </Container>
                
            </TabContainer>
       
    )
}

const TabContainer = styled.div`
    color: #ffffff;
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #00000090;
    padding: 1rem;
    border-radius: 1rem;
    flex-direction: column;
    margin: 1rem 0;

    @media (max-width: 500px) {
        padding: 1rem;
    }

    @media (max-width: 375px) {
        width: auto;
    }
`

const Imagen = styled.img`
    width: 55%;
    max-width: 20rem;
    height: auto;
    margin-top: 1rem;

    @media (max-width: 500px) {
        width: 60%;
    }
`

const Container = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: normal;
    padding-left: 1rem;
    margin-top: 1rem;

    @media (max-width: 500px) {
        padding: 1rem;
        margin-top: 1.5rem;
    }
`

