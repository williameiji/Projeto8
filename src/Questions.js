import React from "react";
import setinha from "./assets/images/setinha.png";

function QuestionsIn({ numQuestions, icon, setclickQuestions, setclickQuestion, classQuestions }) {
    return (
        <div className={classQuestions} onClick={() => (setclickQuestions(false), setclickQuestion(true))}>
            <h4>Pergunta {numQuestions + 1}</h4>
            <ion-icon name={icon}></ion-icon>
        </div>
    );
}

function QuestionIn({ question, setclickQuestion, setclickAnswer }) {
    return (
        <div className="question">
            <p>
                {question}
            </p>
            <img src={setinha} alt="" onClick={() => (setclickQuestion(false), setclickAnswer(true))} />
        </div>
    );
}

function AnswerIn({ answer, clickColor }) {
    return (
        <div className="answers">
            {answer}
            <div className="boxAnswers">
                <div className="red" onClick={() => clickColor("questions colorRed ok", "close-circle")}>Não lembrei</div>
                <div className="orange" onClick={() => clickColor("questions colorOrange ok", "help-circle")}>Quase não lembrei</div>
                <div className="zap" onClick={() => clickColor("questions colorZap ok", "checkmark-circle")}>Zap!</div>
            </div>
        </div>
    );
}

export default function Questions(props) {
    const [classQuestions, setClassQuestions] = React.useState("questions");
    const [icon, setIcon] = React.useState("play-outline");
    const [clickQuestions, setclickQuestions] = React.useState(true);
    const [clickQuestion, setclickQuestion] = React.useState(false);
    const [clickAnswer, setclickAnswer] = React.useState(false);


    function clickColor(color, icon) {
        setclickQuestions(true);
        setClassQuestions(color);
        setIcon(icon);
        setclickAnswer(false);
        props.setChangeIcon([...props.changeIcon, icon]);
        if (color === "questions colorZap ok") {
            props.setContZap(props.contZap + 1);
        }
    }

    return (
        <>
            {clickQuestions ? <QuestionsIn setclickQuestions={setclickQuestions} numQuestions={props.numQuestion} icon={icon} setclickQuestion={setclickQuestion} classQuestions={classQuestions} /> : null}

            {clickQuestion ? <QuestionIn question={props.question} setclickQuestion={setclickQuestion} setclickAnswer={setclickAnswer} /> : null}

            {clickAnswer ? <AnswerIn answer={props.answer} clickColor={clickColor} /> : null}
        </>
    );
}