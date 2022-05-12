import React from "react";
import { useEffect } from "react";

export default function Result({ changeIcon, contador, setInit, input, contZap }) {
    const [result, setResult] = React.useState("hide");
    const [result1, setResult1] = React.useState("hide");
    const [reset, setReset] = React.useState("restart hide")

    useEffect(() => {
        if (contador === 8 && contZap >= input && changeIcon.length === 8) {
            setResult("show");
            setReset("restart");
        } else if ((contador !== 8 || contZap < input) && changeIcon.length === 8) {
            setResult1("show");
            setReset("restart");
        }
    });

    function resetApp() {
        setInit(false);
    }

    return (
        <div className="botDeck">

            <div className={result}>
                <div className="congrats">
                    <img src="./images/party.png" alt="" />
                    <h3>Parabéns</h3>
                </div>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>

            <div className={result1}>
                <div className="almost">
                    <img src="./images/sad.png" alt="" />
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
    )
}