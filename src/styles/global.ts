import { createGlobalStyle} from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  
  #observever{
    height: 50px;
    list-style: none;
    
    background-color: transparent;
  }
  
  :root{
    --background: #F0F0F5;
    --dark:#000;
    --white:#FFF;
    --green:#04D361;
    --title:#3D3D4D;
    
    
    --smal:12px;
    --regular:14px;
    --medium:16px;
    --big:18px;
    
  }

    *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    
    body{
      background:var(--background);
      -webkit-font-smoothing: antialiased;
    }
    
    body, input , button {
      font: var(--medium) sans-serif;
    }
    
    #root {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
    }
`

export const Title = styled.h1`
  font-size: 48px;
  color: var(--title);
  margin-top: 80px;
`

export const Error = styled.div`
  margin-top: 80px;  
  font-size: 26px;
  color: var(--title);
  display: flex;
  align-items: center;
`



