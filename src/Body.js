import React from "react";
import Decks from "./Decks";
import Result from "./Result";
import logop from "./assets/images/logo-pequeno.png"

export default function Body({ setInit, input, selectDeck, setBtnDisable, setClassButton, setDisInput, setInput, setSelectDeck }) {
    const [changeIcon, setChangeIcon] = React.useState([]);
    const [contZap, setContZap] = React.useState(0);

    return (
        <>
            <div className="screenDecks">
                <div className="topDecks">
                    <img src={logop} alt="" />
                    <h1>ZapRecall</h1>
                </div>

                <Decks setChangeIcon={setChangeIcon} changeIcon={changeIcon} setContZap={setContZap} contZap={contZap} selectDeck={selectDeck} />

            </div>

            <Result setSelectDeck={setSelectDeck} setInput={setInput} setDisInput={setDisInput} setBtnDisable={setBtnDisable} setClassButton={setClassButton} changeIcon={changeIcon} setInit={setInit} input={input} contZap={contZap} />
        </>
    );
}