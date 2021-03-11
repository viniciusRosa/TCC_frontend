import React, { Children, useState } from 'react';
import { TeoNav, TeoMenuButton, TeoMenuIcon } from './styles';

const TeoNavTop = ({children}) => {

  return (
  <TeoNav>
    {children}

  </TeoNav>
  )
}

export default TeoNavTop;
