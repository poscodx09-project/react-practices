import React, {useState} from 'react';

function Incrementor02({step,val}) {
    const [cnt,setCnt] = useState(0);
    return (
        <div>
            <button
                onClick={()=>{
                    setCnt(cnt + 1);
                }}
            >
                {'+'}</button>
            {' '}
            { cnt }
            {' '}
            <button
                onClick={()=>{
                    setCnt(cnt + 1);
                }}
            >
                {'-'}</button>
        </div>
    );
}

export default Incrementor02