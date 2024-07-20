import styled from "styled-components";
import React from "react";

export default function CardInput({children}){
    return(
        <Card>            
          {children}
        </Card>
    )
}



const Card = styled.div`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
 

  & p{
    color: #000;
    font-size: large;
    padding: .5rem 0;
  }
`
