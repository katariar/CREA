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
    padding: 10px;

    &.active {
        color: #F5B6AB;
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);

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

