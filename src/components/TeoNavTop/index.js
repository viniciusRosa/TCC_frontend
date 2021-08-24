import React from 'react';
import {
  TeoNav,
  TeoLogo,
  NavTop,
  TeoMenuButton,
  TeoMenuIcon
   } from './styles';
import { useSideMenu } from '../../contexts/SideMenuContext';

const TeoNavTop = () => {

  const {
    sidebar,
    handleSidebar
  } = useSideMenu()

  return (
    <TeoNav>
      <NavTop>
        <TeoMenuButton status={sidebar} onClick={handleSidebar}>
          <TeoMenuIcon />
        </TeoMenuButton>
      </NavTop>
      <div style={{ marginRight: '1rem' }}>
        <TeoLogo />
      </div>
    </TeoNav>
  )
}

export default TeoNavTop;
