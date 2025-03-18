import React from 'react'
import DesktopNav from './desktop/DesktopNav'
import MobileNav from './mobile/MobileNav'

function Header() {
  return (
    <header style={{position:'fixed',top:'0',width:'100%',zIndex:'1000'}}>
        <DesktopNav/>
        <MobileNav/>



    </header>
  )
}

export default Header