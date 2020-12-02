import React from 'react';
import {Nav, NavLink, NavMenu, NavBtn} from './NavbarElements';
import styled from 'styled-components';
import Home from '../../images/home.svg'

const NavContainer = styled.div `
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
`

const HomeIcon = styled.img `
width: 40px;

`

const Navbar = () => {
    return (
        <NavContainer>
          <Nav>
          <NavMenu>
                <NavLink to="/" activeStyle>
                     <HomeIcon src={Home} alt='home' />
                </NavLink>
                      <NavLink to="/add" activeStyle>
                          Add
                      </NavLink>
                      <NavLink to="/profile" activeStyle>
                          Profile
                      </NavLink>
                  </NavMenu>
                  <NavBtn>
                     
                  </NavBtn>
             
          </Nav>
        
        </NavContainer>
    )
}

export default Navbar
