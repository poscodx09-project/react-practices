import React from 'react';
import GroceryListItem from "./GroceryListItem";

function GroceryList({goods}) {


    return (

        <ol className="grocery-list">
            <GroceryListItem name={"bread"} cnt={20} />
            <GroceryListItem name={"milk"} cnt={10} />
            <GroceryListItem name={"chocolate"} cnt={11} />
            <GroceryListItem name={"candy"} cnt={12} />
        </ol>

    );
}

export default GroceryList;