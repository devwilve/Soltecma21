import styled from "styled-components"
import Optimi from '../styles/logoHeader.png'


export default function Logo(){
    return(
        <LogoText >
            <img src={Optimi} alt="Logo SOLTECMA21 C.A"/>
        </LogoText>
    )
}

const LogoText = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 900;
    font-family: monospace;
    color: #d64540;

    
    @media (max-width: 500px) {
        padding-left: 1rem;
    }
`