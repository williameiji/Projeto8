import React from "react";
import { useEffect } from "react";
import sad from "./assets/images/sad.png";
import party from "./assets/images/party.png";

function Congrats() {
    return (
        <>
            <div className="congrats">
                <img src={party} alt="" />
                <h3>Parabéns</h3>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </>
    );
}

function Almost() {
    return (
        <>
            <div className="almost">
                <img src={sad} alt="" />
                <h3>Putz...</h3>
            </div>
            <p>Ainda faltam alguns... Mas não desanime!</p>
        </>
    );
}

function Restart({ resetApp }) {
    return (
        <div className="restart" onClick={resetApp}>REINICIAR RECALL</div>
    );
}

export default function Result({ changeIcon, setInit, input, contZap, setBtnDisable, setClassButton, setDisInput, setInput, setSelectDeck }) {
    const [result, setResult] = React.useState(false);
    const [result1, setResult1] = React.useState(false);
    const [reset, setReset] = React.useState(false);

    useEffect(() => {
        if (contZap >= input && changeIcon.length === 8) {
            setResult(true);
            setReset(true);
        } else if (contZap < input && changeIcon.length === 8) {
            setResult1(true);
            setReset(true);
        }
    });

    function resetApp() {
        setSelectDeck();
        setInput(0);
        setDisInput("");
        setBtnDisable(true);
        setClassButton("button disabled");
        setInit(false);
    }

    return (
        <div className="botDeck">

            {result ? <Congrats /> : null}

            {result1 ? <Almost /> : null}

            {changeIcon.length}/8 CONCLUÍDOS
            <div>
                {changeIcon.map((item, index) => <ion-icon key={index} name={item}></ion-icon>)}
            </div>

            {reset ? <Restart resetApp={resetApp} /> : null}

        </div>
    );
}