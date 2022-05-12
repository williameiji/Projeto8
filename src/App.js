import React from "react";
import Body from "./Body";
import Initial from "./Initial";


export default function App () {
    const [init, setInit] = React.useState(false);
    const [input, setInput] = React.useState();

    return (
        <>
            {init === false ? <Initial setInit={setInit} input={input} setInput={setInput}/> : <Body setInit={setInit} input={input}/>}
            
            
        </>
    )
}