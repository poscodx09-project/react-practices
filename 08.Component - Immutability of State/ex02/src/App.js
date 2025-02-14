import React, {useState} from 'react';
import update from 'react-addons-update';import data from './assets/json/data.js';

function App() {
        const [order,setOrder] = useState(data);
        const [payment, setPayment] = useState(order.payment);
        const [goods,setGoods] = useState(order.goods);

    return (
        <div id='App'>
            <button
                onClick={()=>{
                        //ex01 sol
                        // const orderUpdated = Object.assign({},order, {receive: '서울시 서초구 논현동...'});
                        // setOrder(orderUpdated);

                        // 추천!
                        const orderUpdated = update(order,{
                                receive: {
                                        $set: '서울시 서초구 논현동...'
                                }
                        });
                        setOrder(orderUpdated);

                }}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button
                onClick={()=>{
                        const paymentUpdated = update(order,{
                                 payment:{
                                         method:{
                                                 $set: "Cash"
                                         }
                                 }
                        });
                        setPayment(paymentUpdated.payment);
                }}>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button
                 onClick={()=>{
                        const goodsUpdated = update(goods,{
                                $unshift : [{
                                        "no": "p002-001",
                                        "name": "쑤니맘베이커리",
                                        "price": 2000,
                                        "amount": 1
                                }]
                        })
                        setGoods(goodsUpdated);
                 }}>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button
                onClick={()=>{
                        // sol
                        const goodsUpdated = update(goods,{
                                2:{
                                        name: {
                                                $set: "작은빵집"
                                        }
                                }
                        })
                        setGoods(goodsUpdated);
                }}>
                {"3rd 상품이름 변경"}
            </button>
            <br/><br/>

            <hr/>

                <p>{`배송지: ${order.receive}`}</p>
                <p>{`결제 수단: ${payment.method}`}</p>
                <p>{'상품'}</p>
                <ul>
                        {goods.map((g,idx)=>{
                                return <li key={idx}>{`${g.name} | ${g.price} | ${g.amount}`}</li>
                        })}
                </ul>
        </div>
    );
}

export {App};