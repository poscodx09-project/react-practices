import React, { useEffect, useState, useRef } from "react";

import Modal from "react-modal";
import ReactModal from "react-modal";
import styled from "styled-components";
import "./assets/scss/App.scss";
import * as stylesModal from "./assets/scss/Modal.scss";
import data from "./assets/json/data.js";

const CreateForm = styled.form``;
const UpdateForm = styled.form``;
const ItemList = styled.ul``;
const Item = styled.li``;

ReactModal.setAppElement("body");

function App() {
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem,setSelectedItem] = useState(null);

    useEffect(() => {
        fetch("/item")
            .then(response => response.json())
            .then(data =>{
                setItems(data);
                console.log(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (formData.get("name") === '' || formData.get("type") === '') {
            throw new Error("Validation Error!!");
        }

        // 파일이 없으면 null을 추가 (백엔드에서 처리 가능하도록)
        if (!formData.get("file") || formData.get("file").size === 0) {
            formData.delete("file"); // ✅ 파일이 없으면 제거 (선택 사항)
        }

        console.log("Sending formData:", [...formData.entries()]);

        try {
            const response = await fetch("http://localhost:8081/item/file", {
                method: "POST",
                body: formData, // ✅ 항상 multipart/form-data 전송
            });

            if (!response.ok) {
                throw new Error("Failed to create item.");
            }

            const data = await response.json();
            console.log("Created item:", data);

            setItems(prevItems => [...prevItems, data]);
            event.target.reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const handleDelete = (itemId)=> () =>{

        fetch(`http://localhost:8081/item/${itemId}`,{
            method: "DELETE"
        })
            .then(response=>{
                if(!response.ok){
                    throw new Error("Failed to delete item");
                }
                return response.json();
            })
            .then(()=>{
                setItems(items.filter(item => item.id !== itemId));
            })
            .catch(error => console.error(error));
    };

    const handleUpdate = async (event, itemId) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const updatedItem = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`http://localhost:8081/item/${itemId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedItem),
            });

            if (!response.ok) {
                throw new Error("Failed to update item.");
            }

            const data = await response.json();
            console.log("Updated item:", data);

            setItems(prevItems => prevItems.map(item => (item.id === itemId ? data : item)));
            setModalOpen(false); // ✅ 업데이트 후 모달 닫기
        } catch (error) {
            console.error("Error:", error);
        }
    };



    return (
        <div id="App">
            <h1>AJAX: Restful API</h1>

            <div>
                <CreateForm onSubmit={handleCreate}>
                    <select name={"type"}>
                        <option>BOOK</option>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>FOOD</option>
                    </select>{" "}
                    <input type={"text"} name={"name"} placeholder={"name"} />
                    <input type={"submit"} value={"[C]reate (post)"} />
                </CreateForm>
                <form onSubmit={handleCreate}>
                    <select name={"type"}>
                        <option>BOOK</option>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>FOOD</option>
                    </select>{" "}
                    <input type={"text"} name={"name"} placeholder={"name"} />
                    <input type={"file"} name={"file"} />
                    <input type={"submit"} value={"[C]reate (post)"} />
                </form>
            </div>

            <h2 title={"[R]ead (get)"}>Items</h2>

            <ItemList>
                {items?.map((item, index) => (
                    <Item key={item.id}>
                        <h4>
                            <b
                                title={"[R]ead (get)"}
                                onClick={() => {
                                    setModalOpen(!modalOpen);
                                    setSelectedItem(item);
                                }}
                            >
                                {item.name}
                            </b>
                            <button
                                onClick={handleDelete(item.id)}
                            >{"[D]elete (delete)"}</button>
                        </h4>
                        <div>
                            <span>
                                <b>{index + 1}</b>
                                <i>{item.type}</i>
                            </span>
                            <img
                                src={
                                    item.image || "/assets/images/no-image.png"
                                }
                            />
                        </div>
                    </Item>
                ))}
            </ItemList>

            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                className={stylesModal.Modal}
                overlayClassName={stylesModal.Overlay}
                style={{ content: { width: 280 } }}
            >
                <h3>Update Item</h3>
                {selectedItem && ( // ✅ selectedItem이 존재할 때만 폼 렌더링
                    <UpdateForm onSubmit={(event) => handleUpdate(event, selectedItem.id)}>
                        <label>TYPE</label>{" "}
                        <select name="type" value={selectedItem?.type} onChange={(e) => setSelectedItem({ ...selectedItem, type: e.target.value })}>
                            <option>BOOK</option>
                            <option>CLOTHE</option>
                            <option>MUSIC</option>
                            <option>CAR</option>
                            <option>BEAUTY</option>
                            <option>MOVIE</option>
                            <option>FOOD</option>
                        </select>
                        <br /><br />
                        <label>NAME</label>
                        <input type="text" name="name" value={selectedItem?.name} onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })} />
                        <hr />
                        <input type="submit" value="[U]pdate (update)" />
                    </UpdateForm>
                )}
            </Modal>

        </div>
    );
}

export { App };
