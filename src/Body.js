import React from "react";
import Decks from "./Decks";

function Congrats(props) {
    return (
        <div className>
            <div className="congrats">
                <img src="./images/party.png" alt="" />
                <h3>Parabéns</h3>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </div>
    )
}

function Almost(props) {
    return (
        <div className>
            <div className="almost">
                <img src="./images/sad.png" alt="" />
                <h3>Putz...</h3>
            </div>
            <p>Ainda faltam alguns... Mas não desanime!</p>
        </div>
    )
}

export default function Body() {
    const [inicial, setInicial] = React.useState("screenInicial hide");
    const [decks, setDecks] = React.useState("screenDecks ");
    const [changeIcon, setChangeIcon] = React.useState([]);
    const [contador, setContador] = React.useState(0)


    function changeScreen() {
        setInicial("screenInicial hide");
        setDecks("screenDecks");
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

            <div className="botDeck">

                {changeIcon.length}/8 CONCLUÍDOS
                <div>
                    {changeIcon.map((item, index) => <ion-icon key={index} name={item}></ion-icon>)}
                </div>
            </div>
        </>
    )
}