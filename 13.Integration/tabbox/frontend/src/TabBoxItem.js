import React from 'react';

function TabBoxItem({ name, isActive, onClick }) {
    return (
        <li className={isActive ? 'active' : ''} onClick={onClick}>
            {name}
        </li>
    );
}

export default TabBoxItem;
