export default function Initial({setInit}) {
    function clickInit (){
        setInit(true);
    }

    return (
        <div className="screenInicial">
            <img src="./images/logo.png" alt="" />
            <h1>ZapRecall</h1>
            <div className="button" onClick={clickInit}>Iniciar Recall!</div>
        </div>
    )
}