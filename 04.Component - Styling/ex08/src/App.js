import React from 'react';
import './assets/scss/App.scss';
import GroceryList from "./GroceryList";

function App(props) {
    const goods = [ {"bread": 10}, {"milk": 20}, {"chocolate": 30} ];

    return (
        <div id={'App'}>
            <h1 className={'title'}>{'Grocery List'}</h1>
            <GroceryList goods={goods} />
        </div>
    );
}

export default App;