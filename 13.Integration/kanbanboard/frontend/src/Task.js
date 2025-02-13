import React from 'react';
import {_Task, Task_Remove} from  './assets/scss/Task.scss';
function Task({ task, onToggle }) {
    return (
        <li className={_Task}>
            <input type="checkbox" checked={task.done} onChange={() => onToggle(task.no)} />
            {task.name}
            <a href="#" className={Task_Remove}></a>
        </li>
    );
}

export default Task;
