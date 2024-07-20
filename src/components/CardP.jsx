import {React } from "react"
import styled from "styled-components"
import { theme } from "../styles/theme";
import useIntersection from "./useIntersection";

export default function CardP({children}){
    const [refElement, isIntersecting] = useIntersection({
        threshold: 0.1,
        rootMargin: '300px 0px -10% 0px'
    })
    

    return(
        <CardInt ref={refElement} className={isIntersecting ? 'visible' : ''}>{children}</CardInt>
    )
}

const CardInt = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 1.5rem;
    background: ${theme.black_transparent};
    margin: 2rem 0;
    box-shadow:0 0 1.5rem -.5rem ${theme.black};
    transform: scale(.2);
    opacity: 0;
    transition: all ease-in-out .3s;
    

    & p{
        color: #fff;
        padding-left: 1.5rem;
    }

    &.visible{
        opacity: 1;
        transform: scale(1);
    }
`