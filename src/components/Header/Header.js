import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import UnstyledButton from '../UnstyledButton';
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
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>

        <Filler />
          <MobileActions>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} />
              <VisuallyHidden>Shopping bag</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={2} />
              <VisuallyHidden>Search</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} />
              <VisuallyHidden>Open menu</VisuallyHidden>
            </UnstyledButton>
          </MobileActions>
      </MainHeader>
      
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      >
      </MobileMenu>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
  overflow:auto;
  @media(${QUERIES.tabletAndSmaller}){
    align-items: center;
    border-top: 4px solid var(--gray-900);
  }
  @media(${QUERIES.phoneAndSmaller}){
    padding-inline:16px;
  }
`;

const MobileActions = styled.div`
  display:none;
  @media(${QUERIES.tabletAndSmaller}){
    display:flex;
    gap:32px;
    margin-left:auto;
  }
  @media(${QUERIES.phoneAndSmaller}){
    gap:16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap:  clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  @media(${QUERIES.tabletAndSmaller}){
    display:none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media(${QUERIES.tabletAndSmaller}){
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
  @media(${QUERIES.tabletAndSmaller}){
    display:none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
