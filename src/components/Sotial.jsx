import {AiOutlineWhatsApp, AiFillInstagram} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

export default function Sotial({type, info}){

    const [clase , setClase] = useState('')

    function copyText(data){
        switch (data) {
            case '1':
                navigator.clipboard.writeText('+58 4129370984').then(() => {
                    setClase('copiated')
                    setTimeout(() => {
                        setClase('')
                    }, 2000);

                }, () =>{
                    alert('imposible copiar');
                })
            break;
            
            case '2':

                navigator.clipboard.writeText('ventas@soltecma.com').then(() => {
                    setClase('copiated')
                    setTimeout(() => {
                        setClase('')
                    }, 2000);

                }, () =>{
                    alert('imposible copiar');
                })
                break;
            
            case '3':

                navigator.clipboard.writeText('@soltecma21').then(() => {
                    setClase('copiated')
                    setTimeout(() => {
                        setClase('')
                    }, 2000);

                }, () =>{
                    alert('imposible copiar');
                })
                break;
            default:
                break;
        }
    }

    switch (type) {
        case 'whatsapp':
            return<SotialCont className={clase} onClick={()=>{copyText('1')}} ><AiOutlineWhatsApp/> {info}</SotialCont>
        
        
        case 'email':   
            return<SotialCont className={clase} onClick={()=>{copyText('2')}} ><BiLogoGmail/>{info}</SotialCont>
        
            
        case 'instagram':   
            return<SotialCont className={clase} onClick={()=>{copyText('3')}} ><AiFillInstagram/>{info}</SotialCont>
        
        default :
        break;
    }
}


const SotialCont = styled.div`
    width: auto;
    height: fit-content;
    background: ${theme.blue_background};
    border-radius: .5rem;
    font-size: 1.2rem;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: .5rem 0;
    cursor: pointer;
    transition: all .2s;
    color: ${theme.white_default};
    position: relative;

    @media (max-width: 375px) {
        font-size: medium;
    }

    &:hover{
        background: ${theme.blue_background_hover};
        transform: scale(1.02);
        box-shadow: 0 0 2rem -1rem ${theme.black};
        color: ${theme.white};
    }

    &:active{
        background: ${theme.blue_background};
    }

    & :first-child{
        font-size: xx-large;
        margin-right: .5rem;
    }

    &.copiated::before{
        content: 'Copiado!!';
        background-color: #06a800;
        text-shadow: 0 0 3px #000;
        color: #fff;
        padding: .5rem;
        border-radius: .5rem;
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100% - 1rem);
        height: calc(100% - 1rem);
        font-size: medium;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`