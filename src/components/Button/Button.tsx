import React from "react";
import "./Button.css";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return(
    <div>
        <button className='custom-button'>{props.label}</button>
    </div>
    );
};

export default Button;