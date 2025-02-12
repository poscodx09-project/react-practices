import React from 'react';

function TabBoxItem({ name, isActive, onClick }) {

    return (
        <li
            onClick={onClick}
            style={{backgroundColor: isActive ? '#fc6' : '#ccc'}}
        >
            {name}
        </li>
    );
}

export default TabBoxItem;
