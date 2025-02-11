import React from 'react';

function GroceryListItem({name,cnt}) {
    return (
        <li>
            <strong>{name}</strong>
            <span>{cnt}</span>
        </li>
    );
}

export default GroceryListItem;