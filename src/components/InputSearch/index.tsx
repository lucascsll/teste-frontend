import React,{ InputHTMLAttributes } from "react";
import { Form } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    name: string;
}

const InputSearch:React.FC <InputProps> = ( props) => {
    return (
        <Form>
            <input {...props} placeholder='Filtrar por login'/>
        </Form>
    );
};

export default InputSearch;

