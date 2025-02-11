import React, {Component} from 'react';
import GroceryListItem from "./GroceryListItem";

class GroceryList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ol className="grocery-list">
                {this.props.goods.map((item, index) => {
                    const [name, cnt] = Object.entries(item)[0]; // 객체의 key와 value 추출
                    return <GroceryListItem key={index} name={name} cnt={cnt} />;
                })}
            </ol>
        );
    }
}

export default GroceryList;