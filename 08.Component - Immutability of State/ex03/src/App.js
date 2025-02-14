import React, {useState} from 'react';
import data from './assets/json/data.js';
import update from 'react-addons-update';

function GoodList({goods}) {
    // goods.push(
    //     {
    //         "no": "c002-002",
    //         "name": "스플래쉬베이커리",
    //         "price": 4000,
    //         "amount": 1
    //     }
    // );

    const goodsUpdated = goods.concat(
        {
            "no": "c002-002",
            "name": "스플래쉬베이커리",
            "price": 4000,
            "amount": 1
        }
    );
    return (
        <ul>
            {goodsUpdated.map((g,idx)=>{
                return <li key={idx}>{`${g.name} | ${g.price} | ${g.amount}`}</li>
            })}
        </ul>
    );
}

function App() {
    const [order,setOrder] = useState(data);

    return (
        <div id='App'>
            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제 수단: ${order.payment.method}`}</p>
            <p>{'상품'}</p>

            <GoodList goods={order.goods}/>

            <button
                onClick={()=>{
                    const orderUpdated = update(order,{
                        receive: {
                            $set: "서울시 강남구 논현동..."
                        }
                    });
                    setOrder(orderUpdated);
                }}>
                {"배송지 수정"}
            </button>
        </div>
    );
}

export {App};