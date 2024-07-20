import styled from "styled-components"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

export default function ImagenComp({file, site}) {
    
    return(
        <ImgMe 
        site={site} 
        src={process.env.PUBLIC_URL + `../../images/${file}`}
        />
    )
}

const ImgMe = styled(LazyLoadImage)`
    width: 100%;
    height: ${({site}) => site === '1' ? '20rem' : '10rem'};
    border-radius: 1rem;
    margin: 1rem auto;
    object-fit: cover;
    object-position: 50% 25%;
`