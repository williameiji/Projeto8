import React from "react";
import Decks from "./Decks";
import Result from "./Result";



export default function Body() {
    const [inicial, setInicial] = React.useState("screenInicial");
    const [decks, setDecks] = React.useState("screenDecks hide");
    const [hideResul, setHideResul] = React.useState("botDeck hide");
    const [changeIcon, setChangeIcon] = React.useState([]);
    const [contador, setContador] = React.useState(0);
    

    function changeScreen() {
        setInicial("screenInicial hide");
        setDecks("screenDecks");
        setHideResul("botDeck");
    }

    return (
        <>
            <div className={inicial}>
                <img src="./images/logo.png" alt="" />
                <h1>ZapRecall</h1>
                <div className="button" onClick={changeScreen}>Iniciar Recall!</div>
            </div>

            <div className={decks}>
                <div className="topDecks">
                    <img src="./images/logo-pequeno.png" alt="" />
                    <h1>ZapRecall</h1>
                </div>

                <Decks setChangeIcon={setChangeIcon} changeIcon={changeIcon} setContador={setContador} contador={contador} />

            </div>

            <Result changeIcon={changeIcon} contador={contador} hideResul={hideResul}/>
        </>
    )
}