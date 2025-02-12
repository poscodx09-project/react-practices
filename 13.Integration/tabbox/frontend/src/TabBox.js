import React,{useState} from 'react';
import TabView from "./TabView";
import Tabs from "./Tabs";
import styled from 'styled-components';

const TabBoxStyle = styled.div`
  width: fit-content;
  margin: 100px auto;
`;

function TabBox({ data }) {
    const [activeIndex, setActiveIndex] = useState(0); // 기본 선택: 첫 번째 메뉴

    return (
        <TabBoxStyle>
            <Tabs data={data} activeIndex = {activeIndex} setActiveIndex={setActiveIndex}></Tabs>
            <TabView contents={data[activeIndex].contents}></TabView> {/* 선택된 탭의 내용 전달 */}
        </TabBoxStyle>
    );
}

export default TabBox;