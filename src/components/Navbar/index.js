import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn} from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to="/">
                 Home
                  <Bars />
                  <NavMenu>
                      <NavLink to="/home" activeStyle>
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
                     
                  </NavBtn>
              </NavLink>
          </Nav>
        
        </>
    )
}

export default Navbar;
