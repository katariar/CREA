import React from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';
import styled from 'styled-components';
import Home from '../../images/home-03.svg'
import HomeActive from '../../images/home-01.svg';
import Add from '../../images/add-icon3.svg'
import AddActive from '../../images/ass-icon.svg';
import Profile from '../../images/profile-03.svg';
import ProfileActive from '../../images/profile-01.svg';

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
                     <HomeIcon className="unactiveIcon" src={HomeActive} alt='home' />
                     <HomeIcon className="activeIcon" src={Home} alt="home" />
                </NavLink>
                      <NavLink to="/add" activeStyle>
                          <AddIcon className="unactiveIcon" src={AddActive} alt='add' />
                          <AddIcon className="activeIcon" src={Add} alt='add'/>
                      </NavLink>
                      <NavLink to="/profile" activeStyle>
                          <ProfileIcon className="unactiveIcon" src={ProfileActive} alt='profile'/>
                          <ProfileIcon className="activeIcon" src={Profile} alt='profile'/>
                      </NavLink>
                  </NavMenu>
                
             
          </Nav>
        
        </NavContainer>
    )
}

export default Navbar
