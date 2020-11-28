import React from 'react';
import styled from 'styled-components';

const Logo = styled.div `
position: absolute;
display: block;
top: 0;
left: 0;
width: 100%;
background-color: pink;
padding-left: 10px;
color: darkblue;
`
const Header = () => {
    return (
        <div>
            <Logo><h1>CREA</h1></Logo>
        </div>
    )
}

export default Header
