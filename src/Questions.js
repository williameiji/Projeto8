import React from "react";
import setinha from "./assets/images/setinha.png"

function QuestionsIn({ numQuestions, icon, classQuestions, clickQuestion }) {
    return (
        <div className={classQuestions} onClick={clickQuestion}>
            <h4>Pergunta {numQuestions + 1}</h4>
            <ion-icon name={icon}></ion-icon>
        </div>
    )
}

function QuestionIn({ question, classQuestion, clickAnswer }) {
    return (
        <div className={classQuestion}>
            <p>
                {question}
            </p>
            <img src={setinha} alt="" onClick={clickAnswer} />
        </div>
    )
}

export default function Questions(props) {
    const [classQuestions, setClassQuestions] = React.useState("questions");
    const [classQuestion, setClassQuestion] = React.useState("question hide");
    const [classAnswer, setClassAnswer] = React.useState("answers hide");
    const [icon, setIcon] = React.useState("play-outline");

    function clickQuestion() {
        setClassQuestions("questions hide");
        setClassQuestion("question");
    }

    function clickAnswer() {
        setClassQuestion("question hide");
        setClassAnswer("answers");
    }

    function clickColor(color, icon) {
        setClassQuestions(color);
        setIcon(icon)
        setClassAnswer("answers hide");
        props.setChangeIcon([...props.changeIcon, icon]);
        if (color === "questions colorZap ok") {
            props.setContZap(props.contZap + 1);
        }
    }

    return (
        <>
            <QuestionsIn numQuestions={props.numQuestion} icon={icon} classQuestions={classQuestions} clickQuestion={clickQuestion} />

            <QuestionIn question={props.question} classQuestion={classQuestion} clickAnswer={clickAnswer} />

            <div className={classAnswer}>
                {props.answer}
                <div className="boxAnswers">
                    <div className="red" onClick={() => clickColor("questions colorRed ok", "close-circle")}>Não lembrei</div>
                    <div className="orange" onClick={() => clickColor("questions colorOrange ok", "help-circle")}>Quase não lembrei</div>
                    <div className="zap" onClick={() => clickColor("questions colorZap ok", "checkmark-circle")}>Zap!</div>
                </div>
            </div>
        </>
    );
}