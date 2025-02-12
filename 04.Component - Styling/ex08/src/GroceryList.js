import React from 'react';
import GroceryListItem from "./GroceryListItem";
import styled from 'styled-components';

const StyledOl = styled.ol`
  padding-left: 50px;
`;

function GroceryList({goods}) {

    return (
        <StyledOl>
            {goods.map((item, index) => {
                const [name, cnt] = Object.entries(item)[0];
                return <GroceryListItem key={index} name={name} cnt={cnt} />;
            })}
        </StyledOl>
    );
}

export default GroceryList;