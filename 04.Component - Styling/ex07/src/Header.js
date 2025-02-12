import React from 'react';
import * as styles from './assets/scss/Header.scss';
import styled from 'styled-components';

const HeaderH1 = styled.h1`
  width: 420px;
  font-size: 14px;
  text-align: center;
  margin: 100px auto;
  padding: 20px 20px 20px 20px;
  border: 2px solid #999;
  color: #1144fe;
  background-color: #cdc1ce;
`;

function Header(props) {
    console.log(styles);

    return (
        <HeaderH1>SASS & SCSS</HeaderH1>
    );
}

export default Header;