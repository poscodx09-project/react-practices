import React, {useState} from 'react';
import Modal from "react-modal";
import ReactModal from "react-modal";
import * as styles from './modal.scss';

ReactModal.setAppElement('body');

export default function App() {
    const [modal01Open,setModal01Open] = useState(false);
    const [modal02Open,setModal02Open] = useState(false);
    const [modal03Open,setModal03Open] = useState(false);
    const [modal04Open,setModal04Open] = useState(false);
    const [modal05Open,setModal05Open] = useState(false);

    return (
        <>
            {/* example modal01: Minimal */}
            <button
                onClick={(e)=>{
                    setModal01Open(true);
                }}>
                modal01</button>
            <br/><br/>

            <Modal
                isOpen={modal01Open}
                contentLabel="modal01 example">
                <h1>modal01</h1>
                <button
                    onClick={(e) =>{
                        setModal01Open(false);
                    }}>
                    Close
                </button>
            </Modal>


            {/* example modal02: Using onRequestClose */}
            <button
                onClick={(e) =>{
                    setModal02Open(true);
                }}>
                modal02</button>
            <br/><br/>

            <Modal
                isOpen={modal02Open}
                onRequestClose={() => console.log("!!!!")}
                contentLabel="modal02 example">
                <h1>modal02</h1>
                <button
                    onClick={(e) =>{
                        setModal02Open(false);
                    }}>
                    Close
                </button>
            </Modal>


            {/* example modal03: Using shouldCloseOnOverlayClick */}
            <button
                onClick={(e) =>{
                    setModal03Open(true);
                }}>
                modal03</button>
            <br/><br/>
            <Modal
                isOpen={modal03Open}
                onRequestClose={() => setModal03Open(false)}
                shouldCloseOnOverlayClick={false}
                contentLabel="modal03 example">
                <h1>modal03</h1>
                <button
                    onClick={(e) =>{
                        setModal03Open(false);
                    }}>
                    Close
                </button>
            </Modal>


            {/* example modal04: Using inline styles */}
            <button
                onClick={(e) =>{
                    setModal04Open(true);
                }}>
                modal04</button>
            <br/><br/>

            <Modal
                isOpen={modal04Open}
                contentLabel="modal04 example"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 반투명 배경
                    },
                    content: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px'
                    }
                }}>
                <h1>modal04</h1>
                <button
                    onClick={(e) =>{
                        setModal04Open(false);
                    }}>
                    Close
                </button>
            </Modal>


            {/* example modal05: Using CSS/SASS styles */}
            <button
                onClick={(e) =>{
                    setModal05Open(true);
                }}>
                modal05</button>
            <br/><br/>

            <Modal
                isOpen={modal05Open}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
                style={{content: {width: 350}}}
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    하하하하하하하~
                </div>
                <div className={ styles['modal-dialog-buttons'] }>
                    <button
                        onClick={(e)=>{
                            console.log()
                        }}>
                        확인</button>
                    <button
                        onClick={(e) =>{
                            setModal05Open(false);
                        }}>취소</button>
                </div>
            </Modal>
        </>
    );
}