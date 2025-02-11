import React from 'react';
import MyComponent from './MyComponent';

function App() {

    return (
        <div id={'App'}>
            <MyComponent
                props01={12}
                props02={'hello'}
                props03={new Date().toLocaleTimeString()}
                props04={undefined}
                props05={undefined}
                props06={undefined}
                props07={undefined}
                props08={undefined}
                props09={undefined} />
        </div>
    );
}

export {App};