import React from "react";
import Body from "./Body";
import Initial from "./Initial";


export default function App () {
    const [init, setInit] = React.useState(false);

    return (
        <>
            {init === false ? <Initial setInit={setInit} /> : <Body setInit={setInit}/>}
            
            
        </>
    )
}