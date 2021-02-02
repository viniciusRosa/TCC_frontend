import React from 'react';
import { TeoNavWrapper, TeoLogo, TeoMenuButton, TeoMenuIcon, TeoNavTop } from './styles';
import TeoMenu from '../TeoMenu'

const TeoNav = () => {
  return (
    <TeoNavWrapper>
      <TeoNavTop>
        <TeoLogo />
        <TeoMenuButton>
          <TeoMenuIcon />
        </TeoMenuButton>
      </TeoNavTop>

      <TeoMenu />

    </TeoNavWrapper>
  );
}

export default TeoNav;
