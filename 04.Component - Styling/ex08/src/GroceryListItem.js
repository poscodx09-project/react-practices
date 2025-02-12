import React from 'react';
import {Grocery_Item} from  './assets/scss/GroceryItem.scss';


function GroceryListItem({name,cnt}) {
    return (
        <li className={Grocery_Item}>
            <strong>{name}</strong>
            <span>{cnt}</span>
        </li>
    );
}

export default GroceryListItem;