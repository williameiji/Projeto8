import React from "react";
import { useEffect } from "react";
import arrQuestions from "./shared/arrQuestions";
import logo from "./assets/images/logo.png"

function Input({ setInput }) {
    return (
        <input type="text" placeholder="Digite sua meta de zaps..." onInput={e => setInput(e.target.value)}></input>
    );
}

function SelectOption({ setSelectDeck }) {
    const handleChange = (e) => {
        setSelectDeck(e.target.value);
    };

    return (
        <select required onChange={handleChange}>
            <option value="" disabled selected>Escolha seu deck</option>
            {arrQuestions.map((item, index) => <option key={index} value={index}>{item.name}</option>)}
        </select>
    );
}

function ButtonInit({ clickInit }) {
    return (
        <button className="button" onClick={clickInit}>Iniciar Recall!</button>
    );
}

function ButtonInput({ classButton, btnDisable, clickInput }) {
    return (
        <button disabled={btnDisable} className={classButton} onClick={clickInput}>Iniciar Recall!</button>
    );
}

export default function Initial({ setInit, input, setInput, setSelectDeck, selectDeck }) {
    const [btnDisable, setBtnDisable] = React.useState(true);
    const [classButton, setClassButton] = React.useState("button disabled");
    const [changeInput, setChangeInput] = React.useState(true);
    const [changeButton, setChangeButton] = React.useState(true);

    useEffect(() => {
        if (input > "0" || input <= "8") {
            setBtnDisable(false);
            setClassButton("button");

        }
    });

    function clickInput() {
        setChangeInput(false);
        setChangeButton(false);
    }

    function clickInit() {
        if (selectDeck !== undefined) {
            setInit(true);
        }
    }

    return (
        <div className="screenInicial">
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>

            {changeInput ? <Input setInput={setInput} /> : <SelectOption setSelectDeck={setSelectDeck} />}

            {changeButton ? <ButtonInput classButton={classButton} btnDisable={btnDisable} clickInput={clickInput} /> : <ButtonInit clickInit={clickInit} />}
        </div>
    );
}

