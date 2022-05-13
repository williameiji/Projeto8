import "./assets/css/reset.css"
import "./assets/css/styles.css"
import React from "react";
import Body from "./Body";
import Initial from "./Initial";

export default function App() {
    const [init, setInit] = React.useState(false);
    const [input, setInput] = React.useState(0);
    const [disInput, setDisInput] = React.useState("")
    const [selectDeck, setSelectDeck] = React.useState();
    const [btnDisable, setBtnDisable] = React.useState(true);
    const [classButton, setClassButton] = React.useState("button disabled");

    return (
        <>
            {init === false ? <Initial setDisInput={setDisInput} disInput={disInput} btnDisable={btnDisable} classButton={classButton} setClassButton={setClassButton} setBtnDisable={setBtnDisable} setInit={setInit} input={input} setInput={setInput} setSelectDeck={setSelectDeck} selectDeck={selectDeck} /> : <Body setSelectDeck={setSelectDeck} setInput={setInput} setDisInput={setDisInput} setClassButton={setClassButton} setBtnDisable={setBtnDisable} setInit={setInit} input={input} selectDeck={selectDeck} />}
        </>
    );
}