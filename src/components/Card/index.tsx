import React from "react";
import {FiChevronRight} from "react-icons/fi";
import {Cards} from "./styles";

interface CardProps {
    urlImg?: string;
    name: string;
    path?: string;
    isIcon?: boolean;
}
const Card:React.FC <CardProps> = ({ urlImg, name, path, isIcon}) => {
    return (
        <>
            <Cards>
                <a href={path}>
                    {urlImg && <img src={urlImg} alt="angular"/> }
                    <div>
                        <strong>{name}</strong>
                    </div>
                    {isIcon && <FiChevronRight size={20}/> }
                </a>
            </Cards>
        </>
        )
};

export default Card;

