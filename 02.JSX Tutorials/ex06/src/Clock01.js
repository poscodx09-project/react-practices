import React from 'react';

function Clock01(props) {
    const now = new Date(); // 읽기 쉬운 형식으로 변환
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    return (
        <div>
            {hour}
            {':'}
            {min}
            {':'}
            {sec}
        </div>
    );
}

export default Clock01;