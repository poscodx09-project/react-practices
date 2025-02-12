import React from 'react';

function App() {
    const h1Style = {
        backgroundColor : '#eeff99',
        color : '#000000'
    };

    return (
        <div id={'App'}>
            <h1 style={h1Style}>inline styling</h1>
        </div>
    );
}

export default App;