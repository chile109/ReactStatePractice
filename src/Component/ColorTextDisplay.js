import React, { useContext, useEffect } from "react";
import { ColorTextContext } from "../Context/ColorTextContext";

function ColorTextDisplay() {
    const { color, text, colorClicks, textClicks } = useContext(ColorTextContext);

    useEffect(() => {
        console.log(`Color changed to: ${color}`);
    }, [color]);

    useEffect(() => {
        console.log(`Text changed to: ${text}`);
    }, [text]);

    return (
        <div> <h1 style={{ color }}>{text}</h1>
            <p>Color change clicks: {colorClicks}</p>
            <p>Text change clicks: {textClicks}</p>
        </div>
    );
}

export default ColorTextDisplay;