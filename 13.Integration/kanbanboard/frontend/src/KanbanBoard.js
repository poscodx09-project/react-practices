import React from 'react';
import CardList from "./CardList";
import data from './assets/json/data';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    // 상태별 카드 분류
    const groupedData = {
        ToDo: data.filter(card => card.status === "ToDo"),
        Doing: data.filter(card => card.status === "Doing"),
        Done: data.filter(card => card.status === "Done")
    };

    return (
        <div className={Kanban_Board}>
            {Object.entries(groupedData).map(([status, cards]) => (
                <CardList key={status} title={status} cards={cards} />
            ))}
        </div>
    );
}

export default KanbanBoard;