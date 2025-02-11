import React,{useState} from 'react';
import TabView from "./TabView";
import Tabs from "./Tabs";

function TabBox({ data }) {
    const [activeIndex, setActiveIndex] = useState(0); // 기본 선택: 첫 번째 메뉴

    return (
        <div className={"tab-box"}>
            <Tabs data={data} activeIndex = {activeIndex} setActiveIndex={setActiveIndex}></Tabs>
            <TabView contents={data[activeIndex].contents}></TabView> {/* 선택된 탭의 내용 전달 */}
        </div>
    );
}

export default TabBox;
