import React, { useState } from 'react';
import { Menu } from 'react-feather';
import { X } from 'react-feather';
import styled, { css } from 'styled-components';
import SideDrawer from '../SideDrawer';

type Props = {};

const Navbar = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <NavbarWrapper>
        <Nav>
          <Title>TITLE</Title>
          <MenuButton onClick={() => setShowMenu(true)}>
            <Menu size={40} strokeWidth={1} color="white" />
          </MenuButton>
        </Nav>
      </NavbarWrapper>
      {/* NAV */}
      <SideDrawer showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: gray;
  padding: 10px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
`;

const MenuButton = styled.div`
  cursor: pointer;
`;

export default Navbar;
