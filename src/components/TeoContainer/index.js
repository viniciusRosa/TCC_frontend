import React from 'react';
import { Container } from './styles';
import { SideMenuContextProvider } from '../../contexts/SideMenuContext';

const TeoContainer = ({children}) => {
  return (
    <Container>
      <SideMenuContextProvider>
        {children}
      </SideMenuContextProvider>
    </Container>
  )
}

export default TeoContainer;
