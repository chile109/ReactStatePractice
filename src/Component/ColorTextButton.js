import React, {useContext} from "react";
import { ColorTextContext } from "../Context/ColorTextContext";

function ColorTextButton(){
    const {changeColor, changeText} = useContext(ColorTextContext);
    return (
        <div>
            <button onClick={changeColor}>Change Color</button>
            <button onClick={changeText}>Change Text</button>
        </div>
    );
}

export default ColorTextButton;