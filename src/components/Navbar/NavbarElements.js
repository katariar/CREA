import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #212B4D;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 10;

`

export const NavLink = styled(Link) `
    color: #fff;
    display: flex;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    margin: 30px;

    &.active {
        color: #F5B6AB;
        box-shadow: 0 0 3px 4px white;
        border-radius: 60px;

    }

`

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-top: -40px;


    @mediascreen and (max-width: 768px) {
        display: none;
    }
`

