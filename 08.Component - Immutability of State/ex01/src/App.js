import React, {useEffect, useState} from 'react';
import data from './assets/json/data.js';

function App() {
        const [order,setOrder] = useState(data);
        const [payment, setPayment] = useState(order.payment);
        const [goods,setGoods] = useState(order.goods);

        useEffect(()=>{
                console.log("Order Updated...");
        },[order]);

        useEffect(()=>{
                console.log("Payment Updated...");
        },[payment]);

        useEffect(()=>{
                console.log("Goods Updated...");
        },[goods]);

        return (
        <div id='App'>
            <button
                onClick={()=>{
                        // violation..
                        // order.receive = '서울시 서초구 논현동...';
                        // setOrder(order);

                        const orderUpdated = Object.assign({},order, {receive: '서울시 서초구 논현동...'});
                        setOrder(orderUpdated);

                        // spread 문법 //
                        // setOrder(
                        //     {...order,receive: '강원도 태백시'};
                        // )
                }}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button
                onClick={()=>{
                        const paymentUpdated = Object.assign({},order);
                        paymentUpdated.payment = Object.assign({},order.payment,{method: 'Cash'});
                        setPayment(paymentUpdated.payment);}}>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button
                onClick={()=>{
                        // order.goods.push(
                        //     {
                        //             "no": "p002-001",
                        //             "name": "팬츠스트라이프",
                        //             "price": 2000,
                        //             "amount": 1
                        //     }
                        // );
                        // setGoods(goods);

                        // const goodsUpdated = goods.concat({
                        //                     "no": "p002-001",
                        //                     "name": "팬츠스트라이프",
                        //                     "price": 2000,
                        //                     "amount": 1
                        //             });
                        // setGoods(goodsUpdated);

                        const goodsUpdated = [...goods,{
                                                    "no": "p002-001",
                                                    "name": "팬츠스트라이프",
                                                    "price": 2000,
                                                    "amount": 1
                                            }];
                        setGoods(goodsUpdated);

                }}>

                {"상품 추가"}
            </button>
            <br/><br/>

            <button
                onClick={()=>{
                      //violation
                      //   goods[2].name = "바뀐거";
                      //   setGoods(goods);

                        // goods.splice(2,0,Object.assign({},goods[2],{name : '블루면티'}));
                        const added = [...goods.slice(0,2), Object.assign({},goods[2],{name : '블루면티'}),...goods.slice(3)];
                        setGoods([...added]);
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