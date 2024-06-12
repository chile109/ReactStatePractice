import React, {useContext} from "react";
import { ColorTextContext } from "../Context/ColorTextContext";

function ColorTextDisplay() {
    const {color, text} = useContext(ColorTextContext);
    return (
        <h1 style={{ color }}>{text}</h1>
    );
}

export default ColorTextDisplay;