import React from "react";
import { useEffect } from "react";

export default function Result({ changeIcon, contador, hideResul }) {
    const [result, setResult] = React.useState("hide");
    const [result1, setResult1] = React.useState("hide");

    useEffect(() => {
        if(contador === 8 && changeIcon.length === 8){
            setResult("show");
        }else if(contador !== 8 && changeIcon.length === 8){
            setResult1("show");
        }
    });
    
    return (
        <div className={hideResul}>

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
        </div>
    )
}