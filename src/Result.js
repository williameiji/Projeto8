import React from "react";
import { useEffect } from "react";
import sad from "./assets/images/sad.png"
import party from "./assets/images/party.png"

export default function Result({ changeIcon, setInit, input, contZap, setBtnDisable, setClassButton, setDisInput, setInput, setSelectDeck }) {
    const [result, setResult] = React.useState("hide");
    const [result1, setResult1] = React.useState("hide");
    const [reset, setReset] = React.useState("restart hide");

    useEffect(() => {
        if (contZap >= input && changeIcon.length === 8) {
            setResult("show");
            setReset("restart");
        } else if (contZap < input && changeIcon.length === 8) {
            setResult1("show");
            setReset("restart");
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

            <div className={result}>
                <div className="congrats">
                    <img src={party} alt="" />
                    <h3>Parabéns</h3>
                </div>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>

            <div className={result1}>
                <div className="almost">
                    <img src={sad} alt="" />
                    <h3>Putz...</h3>
                </div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
            </div>

            {changeIcon.length}/8 CONCLUÍDOS
            <div>
                {changeIcon.map((item, index) => <ion-icon key={index} name={item}></ion-icon>)}
            </div>
            <div className={reset} onClick={resetApp}>REINICIAR RECALL</div>
        </div>
    );
}