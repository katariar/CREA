import React from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';
import styled from 'styled-components';
import Home from '../../images/home-03.svg'
import Add from '../../images/profile-01.svg';
import Profile from '../../images/profile-02.svg';


const NavContainer = styled.div `
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;



`

const HomeIcon = styled.img ` 
width: 55px;
`
const AddIcon = styled.img ` 
width: 55px;
`
const ProfileIcon = styled.img ` 
width: 55px;
`

const Navbar = () => {
    return (
        <NavContainer>
          <Nav>
          <NavMenu>
                <NavLink to="/" activeStyle exact={true}>
                     <HomeIcon className="unactiveIcon" src={Home} alt='home' />
                     <HomeIcon className="activeIcon" src={Add} alt="home" />
                </NavLink>
                      <NavLink to="/add" activeStyle>
                          <AddIcon src={Add} alt='add' />
                      </NavLink>
                      <NavLink to="/profile" activeStyle>
                          <ProfileIcon src={Profile} alt='profile'/>
                      </NavLink>
                  </NavMenu>
                
             
          </Nav>
        
        </NavContainer>
    )
}

export default Navbar
