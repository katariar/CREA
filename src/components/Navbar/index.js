import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to="/">
                  <h1>LOGO</h1>
                  <Bars />
                  <NavMenu>
                      <NavLink to="/about" activeStyle>
                          Home
                      </NavLink>
                      <NavLink to="/add" activeStyle>
                          Add
                      </NavLink>
                      <NavLink to="/profile" activeStyle>
                          Profile
                      </NavLink>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/signin'> Sign In</NavBtnLink>
                  </NavBtn>
              </NavLink>
          </Nav>
        
        </>
    )
}

export default Navbar;
