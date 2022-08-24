import React from 'react';
import { Menu } from 'react-feather';
import { X } from 'react-feather';
import styled, { css } from 'styled-components';

type SideDrawerProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideDrawer = ({ showMenu, setShowMenu }: SideDrawerProps) => {
  return (
    <PrimaryNavigation isOpen={showMenu}>
      <DrawerMenuIcon
        onClick={() => setShowMenu(false)}
        size={40}
        strokeWidth={1}
        color="white"
      />
    </PrimaryNavigation>
  );
};

const PrimaryNavigation = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0 0 0 75%;
  display: flex;
  flex-direction: column;
  background-color: steelblue;

  //Menu animation
  transform: ${p => (p.isOpen ? 'translateX(0px)' : 'translateX(100%)')};
  ${({ isOpen }) =>
    isOpen
      ? css`
          transition: transform 500ms ease-out;
        `
      : css`
          transition: transform 250ms ease-in;
        `}
`;

const DrawerMenuIcon = styled(X)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export default SideDrawer;
