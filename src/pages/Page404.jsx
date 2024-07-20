import React from "react"
import styled from "styled-components"
import theme from '../styles/theme'

const imagen404 = '404img.svg'

export default function Page404(){
    return(
        <Container404>

            <Text404>
                404
                <span>Página no encontrada</span>
            </Text404>
            <Imagen 
            src={require(`../styles/${imagen404}`)}
            alt="imagen"
            />
        </Container404>
    )
}

const Container404 = styled.div`

 width: 100vw;
 height: calc(100vh + 3rem);
 position: relative;
 top: -3rem;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: row;

 @media (max-width: 767px) {
        flex-direction: column;
    }
`

const Imagen = styled.img`
    width: auto;
    height: 80%;

    @media (max-width: 768px) {
        height: 50%;
    }
`
const Text404 = styled.div`
    font-size: 12rem;
    color: #d63e01ff;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    text-shadow: 3px -3px 0 #702407;

    @media (max-width: 768px) {
        font-size: 8rem;
        padding-bottom: 2rem;
        
    }

    @media (max-width: 500px) {
        font-size: 5rem;
    }

    & span{
        font-size: 2rem;
        color: #162b83ff;
        text-shadow: 0 0 3px #000;

        @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 500px) {
        font-size: 1rem;
    }
    }
`