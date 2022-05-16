import React from "react";
import { useEffect } from "react";
import arrQuestions from "./shared/arrQuestions";
import logo from "./assets/images/logo.png"

function Input({ disInput, setInput }) {
    return (
        <input className={disInput} type="text" placeholder="Digite sua meta de zaps entre 1 e 8..." onInput={e => setInput(e.target.value)}></input>
    );
}

function SelectOption({ setSelectDeck }) {
    const handleChange = (e) => {
        setSelectDeck(e.target.value);
    };

    return (
        <select required onChange={handleChange} defaultValue="">
            <option value="" disabled >Escolha seu deck</option>
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

export default function Initial({ setInit, input, setInput, setSelectDeck, selectDeck, setBtnDisable, setClassButton, classButton, btnDisable, disInput, setDisInput }) {
    const [changeInput, setChangeInput] = React.useState(true);
    const [changeButton, setChangeButton] = React.useState(true);

    useEffect(() => {
        if (Number(input) >= 1 && Number(input) <= 8) {
            setDisInput("ok");
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

            {changeInput ? <Input disInput={disInput} setInput={setInput} /> : <SelectOption setSelectDeck={setSelectDeck} />}

            {changeButton ? <ButtonInput classButton={classButton} btnDisable={btnDisable} clickInput={clickInput} /> : <ButtonInit clickInit={clickInit} />}
        </div>
    );
}

