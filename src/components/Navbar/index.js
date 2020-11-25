import React from 'react';
import {Nav, NavLink, NavMenu, NavBtn} from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to="/">
                 Home
                  <NavMenu>
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
