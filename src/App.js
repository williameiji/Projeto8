import React from "react";
import Body from "./Body";
import Initial from "./Initial";

export default function App() {
    const [init, setInit] = React.useState(false);
    const [input, setInput] = React.useState();
    const [selectDeck, setSelectDeck] = React.useState();

    return (
        <>
            {init === false ? <Initial setInit={setInit} input={input} setInput={setInput} setSelectDeck={setSelectDeck} selectDeck={selectDeck} /> : <Body setInit={setInit} input={input} selectDeck={selectDeck} />}
        </>
    );
}