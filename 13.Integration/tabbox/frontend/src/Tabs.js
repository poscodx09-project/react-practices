import React from 'react';
import TabBoxItem from "./TabBoxItem";
import {Tabs_Style} from './assets/scss/Tabs.scss';

function Tabs({data, activeIndex,setActiveIndex}) {

    return (
        <ul className={Tabs_Style}>
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