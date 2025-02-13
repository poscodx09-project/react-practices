import React, {useState} from 'react';
import TaskList from './TaskList';
import {_Card,Card_Title,Card_Title_Open} from './assets/scss/Card.scss'; // SCSS Modules 적용

function Card({ card }) {
    const [tasks, setTasks] = useState(card.tasks);

    const toggleTask = (taskNo) => {
        setTasks(tasks.map(task =>
            task.no === taskNo ? { ...task, done: !task.done } : task
        ));
    };

    return (
        <div className={_Card}>
            <div className={`${Card_Title} ${card.tasks.length > 0 ? Card_Title_Open : ''}`}>
                {card.title}
            </div>
            <div>
                {card.description}
                {card.tasks.length > 0 && <TaskList tasks={tasks} onToggle={toggleTask} />}
            </div>
        </div>
    );
}

export default Card;
