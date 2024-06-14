import React, { useContext, useEffect } from "react";
import { ColorTextContext } from "../Context/ColorTextContext";
import { useSelector, useDispatch } from "react-redux";
import { changeColor, changeText } from "../Redux/Action";

function ColorTextDisplay() {
    const { colorClicks, textClicks, incrementColorClicks, incrementTextClicks } = useContext(ColorTextContext);
    const color = useSelector(state => state.color);
    const text = useSelector(state => state.text);
    const dispatch = useDispatch();

    const handleColorChange = () => {
        dispatch(changeColor());
        incrementColorClicks();
    };

    const handleTextChange = () => {
        dispatch(changeText());
        incrementTextClicks();
    };

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
            <button onClick={handleColorChange}>Change Color</button>
            <button onClick={handleTextChange}>Change Text</button>
        </div>
    );
}

export default ColorTextDisplay;