import React, { useState } from 'react';
import {
  Wrapper,
  TeoNavWrapper,
  TeoLogo,
  NavTop,
  TeoMenuUl,
  DivM,
  TeoMenuLi,
  TeoMenuButton,
  TeoMenuIcon

} from './styles';
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu';

import SideMenu from '../../Routes/SideMenu';


const TeoNav = ({ status }) => {

  const [sidebar, setsidebar] = useState(false)


  function handleSidebar() {
    setsidebar(!sidebar)
  }


  return (
    <Wrapper status={sidebar}>
        <NavTop>
          <TeoLogo />
          <TeoMenuButton status={sidebar} onClick={handleSidebar}>
            <TeoMenuIcon />
          </TeoMenuButton>
        </NavTop>
      <TeoNavWrapper status={sidebar}>

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
