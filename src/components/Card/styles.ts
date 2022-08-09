import styled from "styled-components";

export const Cards = styled.div`
    
  margin-top: 16px;
  max-width: 700px;
  
  a{
    background: var(--white);
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    
    &:hover{
      transform: translateX(10px);
    }
    & + a{
      margin-top: 16px;
    }
  }
  
  img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  
  div{
    margin-left: 16px;
    
    strong{
      font-size: 20px;
      color: var(--title);
    }
  }
  
  svg{
    margin-left: auto;
    color: var(--title);
  }
  
`
