import React from 'react';

function Contents(props) {
    return (
        <div
            className='Clock'
            title='시계'>
            {
                // 표현식이 실행되는 블록은 주석이 가능하다
            }
            <p>Comment</p>
            {
                // JSX는 HTML이 아니라서 <!----> 를 사용할 수 없음
            }
            <div>{'00:00:00'}</div>
            /* JSX안에서 JS주석을 사용하면 그대로 화면에 출력된다 */
        </div>
    );
}

export default Contents;