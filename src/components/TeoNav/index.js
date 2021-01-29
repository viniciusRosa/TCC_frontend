import React from 'react';
import { TeoNavWrapper, TeoLogo, TeoMenuButton, TeoMenuIcon, TeoNavTop } from './styles';

const TeoNav = () => {
  return (
    <TeoNavWrapper>
      <TeoNavTop>
        <TeoLogo />
        <TeoMenuButton>
          <TeoMenuIcon />
        </TeoMenuButton>
      </TeoNavTop>
      <h3>nav</h3>
    </TeoNavWrapper>
  );
}

export default TeoNav;
