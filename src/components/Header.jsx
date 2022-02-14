import React from 'react'
import { HeaderAccount } from './HeaderAccount'
import { HeaderMenu } from './HeaderMenu'
import { HeaderSearchbar } from './HeaderSearchbar'

export const Header = () => {
  return (
      <nav>
          <ul>
              <HeaderMenu />
              <HeaderSearchbar />
              <HeaderAccount />
          </ul>
      </nav>
  )
}