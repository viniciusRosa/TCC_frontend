import React, { useState } from 'react';
import {
  Wrapper,
  TeoNavWrapper,
  TeoMenuUl,
  DivM,
  TeoMenuLi
} from './styles';
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu';
import { useSideMenu } from '../../contexts/SideMenuContext';
import SideMenu from '../../Routes/SideMenu';

const TeoNav = () => {

  const {
    sidebar,
  } = useSideMenu()

  return (
    <Wrapper status={sidebar}>

      <TeoNavWrapper status={sidebar} className='w3-sidebar w3-bar-block w3-card w3-animate-left'>

        <TeoMenuUl >
          {
            SideMenu.map((item) => {
              return (
                <DivM>
                  <TeoMenuLi key={item.path}> <Link to={item.path}>{item.title}</Link>
                  {
                    item.children &&
                    <>
                    <SubMenu item={item}/>
                    </>
                  }
                  </TeoMenuLi>

                </DivM>
              )
            })
          }
        </TeoMenuUl>

      </TeoNavWrapper>
      </Wrapper>
  );
}

export default TeoNav;
