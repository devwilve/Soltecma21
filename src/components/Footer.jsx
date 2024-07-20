import React from "react";
import styled from "styled-components";
import {AiOutlineWhatsApp, AiFillInstagram} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
import { NavLink } from "react-router-dom";

export default function Footer() {
    return(
        <FooterContainer>
            <Left>
                <p>SOLTECMA21 C.A</p>
                <p>Version 1.0</p>
            </Left>
            <RightPanel>

            <IconCont to="/contactanos">
                <AiOutlineWhatsApp/>
            </IconCont>

            <IconCont to="/contactanos">
                <AiFillInstagram/>
            </IconCont>

            <IconCont to="/contactanos">
                <BiLogoGmail/>
            </IconCont>
            </RightPanel>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    position: static;
    bottom: 0;
    background-color: #000000b9;
    color: #aaaaaa;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 1rem;
    

    @media (max-width: 500px) {
       flex-direction: column;
    }
`

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`

const RightPanel = styled.div`
    font-size: xx-large;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    @media (max-width: 500px) {
       margin-top: 1rem;
    }
`

const IconCont = styled(NavLink)`
    border-radius: 30%;
    background: linear-gradient(160deg, #2742b9, #122680);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .3rem .3rem .3rem .333rem;
    color: #cecece;
    transition: all .2s;
    cursor: pointer;

    &:hover{
        background: linear-gradient(160deg, #304cc9, #162c8f);
        transform: scale(1.07);
        box-shadow: 0 0 2rem -1rem #000;
        color: #ffffff;
    }

    &:active{
        background: linear-gradient(160deg, #2742b9, #122680);
    }
`

