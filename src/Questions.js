import React from "react";

export default function Questions(props) {
    const [classQuestions, setClassQuestions] = React.useState("questions");
    const [classQuestion, setClassQuestion] = React.useState("question hide");
    const [classAnswer, setClassAnswer] = React.useState("answers hide");
    
    
    const [icon, setIcon] = React.useState("play-outline");
    
    function clickQuestion() {
        setClassQuestions("questions hide");
        setClassQuestion("question");
    }

    function clickAnswer (){
        setClassQuestion("question hide");
        setClassAnswer("answers");
    }

    function clickRed (){
        setClassQuestions("questions colorRed");
        setClassAnswer("answers hide");
        setIcon("close-circle");
        props.setChangeIcon([...props.changeIcon, "close-circle"]);
    }

    function clickOrange(){
        setClassQuestions("questions colorOrange");
        setClassAnswer("answers hide");
        setIcon("help-circle");
        props.setChangeIcon([...props.changeIcon, "help-circle"]);
        props.setContador(props.contador + 1);
    }

    function clickZap (){
        setClassQuestions("questions colorZap");
        setClassAnswer("answers hide");
        setIcon("checkmark-circle");
        props.setChangeIcon([...props.changeIcon, "checkmark-circle"]);
        props.setContador(props.contador + 1);
        props.setContZap(props.contZap + 1);
    }

    return (
        <>
            <div className={classQuestions} onClick={clickQuestion}>
                <h4>Pergunta {props.numQuestion + 1}</h4>
                <ion-icon name={icon}></ion-icon>
            </div>

            <div className={classQuestion}>
                <p>
                    {props.question}
                </p>
                <img src="./images/setinha.png" alt="" onClick={clickAnswer}/>
            </div>

            <div className={classAnswer}>
                {props.answer}
                <div className="boxAnswers">
                    <div className="red" onClick={clickRed}>Não lembrei</div>
                    <div className="orange" onClick={clickOrange}>Quase não lembrei</div>
                    <div className="zap" onClick={clickZap}>Zap!</div>
                </div>
            </div>
        </>
    )
}