import React from 'react';

function Clock03({hour,min,sec}) {
    const hour2 = hour;

    return (
        <div>
            {('0' + hour2).slice(-2)}
            {':'}
            {('0' + min).slice(-2)}
            {':'}
            {('0' + sec).slice(-2)}
        </div>
    );
}

export default Clock03;