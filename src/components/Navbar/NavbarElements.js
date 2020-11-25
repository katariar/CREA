import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`
    background: grey;
    height: 80px;
    display: flex;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    bottom. 0;
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
        color: black;
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
