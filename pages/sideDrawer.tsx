import styled from 'styled-components';
import type { NextPage } from 'next';
import { Menu } from 'react-feather';

const SideDrawer: NextPage = () => {
  return (
    <Container>
      <Backdrop></Backdrop>
      <Sidebar>
        <MenuIcon size={32} strokeWidth={1} />
      </Sidebar>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  z-index: 999;
  isolation: isolate;
`;
const Backdrop = styled.div`
  /* Take full size */
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  /* User still can see the content of main page */
  background: hsl(220deg 5% 40% / 0.7);
  z-index: -1;
`;

const Sidebar = styled.div`
  /* Take full size */
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  width: 20%;

  /* Background */
  background-color: #fff;
`;

const MenuIcon = styled(Menu)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export default SideDrawer;
