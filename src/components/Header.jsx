import React, { Suspense, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "./Logo";
import { theme } from "../styles/theme";

export const heightHeader = '3.5rem';

export default function Header() {

    const [navBar, setNavBar] = useState('');
    const homeRef = useRef(null);
    
    function closeNavBar(){

        setTimeout(() => {
            setNavBar(!navBar)
        }, 300);
    }

    return(
        <HeaderStyle >
            <Logo/>
            
            <Links className={navBar? 'activo' : ''}>
                
                <ButtonLink onClick={()=>{closeNavBar()}} ref={homeRef} to="/">Inicio</ButtonLink>
                <ButtonLink onClick={()=>{closeNavBar()}} to="/nosotros">Quienes somos</ButtonLink>
                <ButtonLink onClick={()=>{closeNavBar()}} to="/contactanos">Contáctanos</ButtonLink>
                
                
            </Links>

            
                <Suspense fallback={<h3>Cargando</h3>}>
                    <Outlet/>
                </Suspense>
                
            <IconBurguer onClick={()=>{setNavBar(!navBar)}} />
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    height: ${heightHeader};
    width: 100%;
    background-color: ${theme.black_transparent};
    backdrop-filter: blur(5px);
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    
    @media (max-width: 500px) {
        align-items: center;
        justify-content: space-between;
    }
`

const IconBurguer = styled(CiMenuBurger)`
    display: none;
    cursor: pointer;
    transition: all .2s;
    

    &:hover{
        color: #3e5de4;
        transform: scale(1.1);
    }

    @media (max-width: 500px) {
        display: flex;
        margin-right: .8rem;
        font-size: 1.5rem;
    }
`

const Links = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 500px) {
        display: none;
        right: 100%;

        &.activo{
            position: absolute;
            display: grid;
            grid-row: auto;
            row-gap: .5rem;
            top: ${heightHeader};
            right: 0;
            border-radius:0 0 0 1rem ;

            padding: .5rem;
            width: fit-content;
            height: fit-content;            
            background-color: ${theme.black_transparent};
            backdrop-filter: blur(5px);
        }
    }
`

const ButtonLink = styled(NavLink)`
    color: #919191;
    text-decoration: none;
    padding: 0 1rem;
    font-weight: 700;
    height: 100%;
    display: flex;
    align-items: center;
    transition: all .2s;

    &:hover{
        color: #6473b9;
    }

    &.active{
        color: #2a4eee;
        transition: all .2s;
    }

    &.active:hover{
        color: #3a5bec;
        text-shadow: 0 0 3px #000000;
    }
`