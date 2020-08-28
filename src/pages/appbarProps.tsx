import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../assets/logo/logo'
import { StyledAppBarProps } from '../molecules'

const appbarProps:StyledAppBarProps = {
  logo: <Logo/>,
  menu: [
    {
      component: Link,
      to: '/',
      children: 'HOME'
    },
    {
      component: Link,
      to: '/page2',
      children: 'PAGE'
    },
    {
      component: Link,
      to: '/blank',
      children: 'NEXT'
    }
  ]
}

export { appbarProps }
