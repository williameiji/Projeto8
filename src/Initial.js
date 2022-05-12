import React from "react";
import { useEffect } from "react";

export default function Initial({setInit, input, setInput}) {
    const [btnDisable, setBtnDisable] = React.useState(true);
    const [classButton, setClassButton] = React.useState("button disabled");
    

    useEffect(() => {
        if(input > "0" || input <= "8"){
            setBtnDisable(false);
            setClassButton("button");
        }
    });

    function clickInit (){
        setInit(true);
    }

    return (
        <div className="screenInicial">
            <img src="./images/logo.png" alt="" />
            <h1>ZapRecall</h1>
            <input type="text" placeholder="Digite sua meta de zaps..." onInput={e => setInput(e.target.value)}></input>
            <button disabled={btnDisable} className={classButton} onClick={clickInit}>Iniciar Recall!</button>
        </div>
    )
}