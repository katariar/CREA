import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`
    background: darkblue;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

`;

export const NavLink = styled(Link) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: pink;
    }

`;

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: -24px;


    @mediascreen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media-screen and (max-width: 768px) {
        display: none;
    }
`;
