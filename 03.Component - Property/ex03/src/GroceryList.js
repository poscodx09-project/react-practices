import React from 'react';
import GroceryListItem from "./GroceryListItem";

function GroceryList({goods}) {


    return (
        <ol className="grocery-list">
            {goods.map((item, index) => {

                return <GroceryListItem key={index} name={item.name} cnt={item.cnt} />;
            })}
        </ol>
    );
}

export default GroceryList;