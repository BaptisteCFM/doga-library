import React from "react";
import { ButtonTest } from "./Button.styled";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return(
    <div>
        <ButtonTest>{props.label}</ButtonTest>
    </div>
    );
};

export default Button;