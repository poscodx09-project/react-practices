import React,{useState} from 'react';
import TabBox from "./TabBox";
import data from "./assets/json/data";
import TabView from "./TabView";
import TabBoxItem from "./TabBoxItem";

function Tabs({data,activeIndex,setActiveIndex}) {
    // const [activeIndex, setActiveIndex] = useState(0); // 기본 선택: 첫 번째 메뉴

    return (
        <ul>
            {data.map((tab, index) => (
                <TabBoxItem
                    key={tab.no} // `no`를 key로 사용
                    name={tab.name}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </ul>
    );
}

export default Tabs;