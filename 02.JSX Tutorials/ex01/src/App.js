import React from 'react';

function App() {
    React.createElement("input",{
        type: "text",
        maxLength : '10'
    });

    return (
        <div>
            <h1>Ex01</h1>
            <p>특징 I: HTML과 비교</p>
            <input type="text" maxLength="10" />
            <hr/>
            <img src=""/>
            <h4 id="title" style={{textDecoration: "underline"}}>Inline Styling</h4>
        </div>
    );
}

export {App};