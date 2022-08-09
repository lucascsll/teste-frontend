import styled from "styled-components";
import { shade } from 'polished'

export const Form = styled.form`

  margin-top: 40px;
  max-width: 700px;
  display: flex;
  
  input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
  }
  
  button{
    width: 210px;
    height: 70px;
    background: var(--green);
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: var(--white);
    font-weight: bold;
    transition: background-color 0.2s;
    
    &:hover{
      background:${shade(0.2,'#04D361')} ;
    }
  }



`
