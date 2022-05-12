import React from "react";
import Decks from "./Decks";
import Result from "./Result";

export default function Body({ setInit, input, selectDeck }) {
    const [changeIcon, setChangeIcon] = React.useState([]);
    const [contador, setContador] = React.useState(0);
    const [contZap, setContZap] = React.useState(0);

    return (
        <>
            <div className="screenDecks">
                <div className="topDecks">
                    <img src="./images/logo-pequeno.png" alt="" />
                    <h1>ZapRecall</h1>
                </div>

                <Decks setChangeIcon={setChangeIcon} changeIcon={changeIcon} setContador={setContador} contador={contador} setContZap={setContZap} contZap={contZap} selectDeck={selectDeck} />

            </div>

            <Result changeIcon={changeIcon} contador={contador} setInit={setInit} input={input} contZap={contZap} />
        </>
    );
}