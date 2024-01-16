/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
      <CloseButton onClick={onDismiss}>
        <Icon id="close" strokeWidth={2} />
        <VisuallyHidden>Dismiss menu</VisuallyHidden>
      </CloseButton>
      <Filler />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position:fixed;
  background:hsla(220 5% 40% / 0.8);
  top:0;
  left:0;
  right:0;
  bottom:0;
  display:flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  width:300px;
  height:100%;
  background:white;
  display:flex;
  flex-direction:column;
  padding:32px;
`

const CloseButton = styled(UnstyledButton)`
  position:absolute;
  top:10px;
  right:0px;
  padding:16px;
`
const Filler = styled.div`
  flex:1;
`
const Nav = styled.nav`
  display:flex;
  flex-direction: column;
  gap:16px;
`

const NavLink = styled.a`
    font-size:${18/16}rem;
    font-weight:${WEIGHTS.medium};
    text-transform: uppercase;
    text-decoration: none;
    color:black;

    &:first-of-type{
      color: var(--secondary);
    }
`

const Footer = styled.footer`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
  gap:14px;
`

const FooterLink = styled.a`
    text-decoration:none;
    font-size:${14/16}rem;
    color:var(--gray-700)
`

export default MobileMenu;
