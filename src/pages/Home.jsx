import React from "react";
import CardInput from "../components/CardInput";
import styled from "styled-components";
//import ImagenComp from "../components/ImagenComp";
import Carousel from "../components/Carousel";
import {LazyLoadImage  } from 'react-lazy-load-image-component';
import placeHold from '../styles/logoHeader.png';



export default function Home(){
    return(
   
        <CardInput>
          <Carousel autoPlay={true} botones={true}/>
          <Parraf>Somos una empresa cuyo objetivo fundamental es ofrecer servicios profesionales de alta calidad a nuestros clientes actuales y potenciales, que satisfagan sus necesidades y expectativas en las áreas de mecánica, electricidad, instrumentación, planificación, control de proyectos y mantenimientos.</Parraf>
    

            {/* <ImagenComp file='7.jpg' site='1'/> */}

            <ImageLazyLoad
              threshold={1}
              src={process.env.PUBLIC_URL + `../../images/7.jpg`}
              placeholderSrc={placeHold}
              
            />

        </CardInput>
       
        )
}

const Parraf = styled.p`
  text-align: justify;
  margin-bottom: 3rem;
`
const ImageLazyLoad = styled(LazyLoadImage)`
  width: 100%;
  height: 50%;

`