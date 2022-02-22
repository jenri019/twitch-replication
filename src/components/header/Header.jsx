import React from 'react'
import { HeaderAccount } from './HeaderAccount'
import { HeaderMenu } from './HeaderMenu'
import { HeaderSearchbar } from './HeaderSearchbar'
import styled from 'styled-components'

const NavigationBar = styled.nav`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background-color: #18181b;
    height: 50px;
`;

export const Header = () => {
  return (
      <NavigationBar>
        <HeaderMenu />
        <HeaderSearchbar />
        <HeaderAccount />
      </NavigationBar>
  )
}