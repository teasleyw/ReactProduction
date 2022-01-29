import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  SignUpBtn
} from './NavbarStyle';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#e9f362' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
                William Teasley
              </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Timeline' onClick={closeMobileMenu}>
                  Blog
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Metronome' onClick={closeMobileMenu}>
                  Metronome
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Testing' onClick={closeMobileMenu}>
                  Testing
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Sandbox' onClick={closeMobileMenu}>
                  Sandbox
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavItem>
                  <NavLinks to='/SignUp' onClick={closeMobileMenu}>
                    Sign Up
                  </NavLinks>
                </NavItem>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <SignUpBtn onClick={closeMobileMenu} fontBig primary>
                      Sign Up
                    </SignUpBtn>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;