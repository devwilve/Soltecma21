
import { useEffect, useState } from "react"
import styled from "styled-components";
import {theme} from "../styles/theme";
import {AiFillCaretLeft , AiFillCaretRight } from 'react-icons/ai'

export default function Carousel(props){
    const images = ["dibujo-1.svg", "dibujo-2.svg", "dibujo-3.svg"];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded , setLoaded] = useState(false);
    
    useEffect(()=>{
        if (props.autoPlay) {
            const interval = setInterval(() => {
                selectNewImage(selectedImage , images)
            }, 5000);
            return () => clearInterval(interval)
        }

    })

    const selectNewImage = (index , image , next = true) => {
        
        setLoaded(false);

        setTimeout(() => {

            const condition = next ? selectedIndex < image.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex +1 : 0) : condition ? selectedIndex -1 : image.length -1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);

        }, 500);
        
    }

    const previous = ()=>{
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
        selectNewImage(selectedIndex, images);
    }
    
    return (
        <CarouselImgCont>
            <CarouselImg
                src={require(`../styles/${selectedImage}`)}
                alt='imagen carousel'
                className={loaded ? 'loaded' : ''}
                onLoad={() => setLoaded(true)}
            />
           
            {
            props.botones ? (<>
                <ButtonLeft  onClick={previous}><AiFillCaretLeft/></ButtonLeft> 
                <ButtonRight onClick={next}><AiFillCaretRight/></ButtonRight> </>) : (<></>)
            }
              
        </CarouselImgCont>
    )
}

const CarouselImgCont = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 1rem 0 2rem 0;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover button{
        opacity: 1;
        cursor: pointer;
        transform: scale(1.1);
    }
`

const CarouselImg = styled.img`
    
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0;
    transition: 1s;
    top: 0;

    &.loaded{
        opacity: 1; 
    }
`


const ButtonLeft = styled.button`
    position: absolute;
    height: 100%;
    width: 20%;
    left: 0;
    background: linear-gradient(90deg ,   #0000009d, transparent);
    color: ${theme.white};
    font-size: x-large;
    border: none;
    opacity: 0;
    transition: all .3s;
    text-align: start;
    padding-left: .5rem;
`
const ButtonRight = styled.button`
    position: absolute;
    height: 100%;
    width: 20%;
    right: 0;
    background: linear-gradient(90deg ,transparent ,   #0000009d);
    color: ${theme.white};
    font-size: x-large;
    border: none;
    text-align: end;
    opacity: 0;
    transition: all .3s;
    padding-right: .5rem;
  
`
