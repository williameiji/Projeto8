import React from "react";
import arrQuestions from "./shared/arrQuestions";
import Questions from "./Questions";

export default function FlashCards({ setChangeIcon, changeIcon, setContador, contador, setContZap, contZap, selectDeck }) {
    function ramdom() {
        return Math.random() - 0.5;
    }

    let renderQuestions = [...arrQuestions[selectDeck].question];
    renderQuestions.sort(ramdom);

    return (
        <>
            {renderQuestions.map((item, index) => <Questions key={index} numQuestion={index} question={item.question} answer={item.answer} setChangeIcon={setChangeIcon} changeIcon={changeIcon} setContador={setContador} contador={contador} setContZap={setContZap} contZap={contZap} />)}
        </>
    );
}