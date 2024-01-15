import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side>
        </Side>
          <MobileNav>
            <Button>
              <Icon id="shopping-bag" strokeWidth={2} />
              <VisuallyHidden>Shopping bag</VisuallyHidden>
            </Button>
            <Button>
              <Icon id="search" strokeWidth={2} />
              <VisuallyHidden>Search</VisuallyHidden>
            </Button>
            <MenuButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} />
              <VisuallyHidden>Open menu</VisuallyHidden>
            </MenuButton>
          </MobileNav>
      </MainHeader>
      
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      >
      </MobileMenu>
    </header>
  );
};
const Button = styled.button`
  background:none;
  border:none;
`
const MenuButton = styled(Button)`

`



const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media(${QUERIES.tablet}){
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
    padding: 24px 16px 20px;
  }
`;

const MobileNav = styled.nav`
  display:none;
  @media(${QUERIES.tablet}){
    display:flex;
    gap:16px;
    margin-left:auto;
    min-width:138px;
  }
  @media(${QUERIES.phone}){
    min-width:105px;
    gap:0;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media(${QUERIES.tablet}){
    display:none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
