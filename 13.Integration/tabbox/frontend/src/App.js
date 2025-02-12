import React from 'react';
// import './assets/css/styles.css';
import data from './assets/json/data';
import './assets/scss/App.scss';
import TabBox from "./TabBox";

function App(props) {

    const sortedData = [...data].sort((a, b) =>  b.no - a.no);

    return (
        <div id={'App'}>
            <TabBox data={sortedData} />
        </div>
    );
}

export default App;