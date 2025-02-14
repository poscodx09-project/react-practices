import React, {useState} from 'react';
import TaskList from './TaskList';
import * as styles from './assets/scss/Card.scss'; // SCSS Modules 적용

function Card({ card }) {
    const [tasks, setTasks] = useState(card.tasks);

    const toggleTask = (taskNo) => {
        setTasks(tasks.map(task =>
            task.no === taskNo ? { ...task, done: !task.done } : task
        ));
    };

    return (
        <div className={styles._Card}>
            <div className={`${styles.Card_Title} ${card.tasks.length > 0 ? styles.Card_Title_Open : ''}`}>
                {card.title}
            </div>
            <div>
                {card.description}
                <TaskList tasks={card.tasks || []} onToggle={toggleTask} />
            </div>
        </div>
    );
}

export default Card;
