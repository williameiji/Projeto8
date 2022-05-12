import React from "react";
import questions from "./shared/questions";
import Questions from "./Questions";

export default function FlashCards({setChangeIcon, changeIcon, setContador, contador }) {
    function ramdom() {
        return Math.random() - 0.5;
    }

    let renderQuestions = [...questions.questions];
    renderQuestions.sort(ramdom);

    return (
        <>
            {renderQuestions.map((item, index) => <Questions key={index} numQuestion={index} question={item.question} answer={item.answer} setChangeIcon={setChangeIcon} changeIcon={changeIcon} setContador={setContador} contador={contador} />)}
        </>
    )
}