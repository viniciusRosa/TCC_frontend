import React from 'react';
import { TeoNavWrapper,
          TeoLogo,
          TeoMenuButton,
          TeoMenuIcon,
          TeoNavTop,
          TeoMenuUl,
          DivM,
          TeoMenuLi,

         } from './styles';
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu';

import menu from '../../testeMenu';


const TeoNav = () => {
  return (
    <TeoNavWrapper>
      <TeoNavTop>
        <TeoLogo />
        <TeoMenuButton>
          <TeoMenuIcon />
        </TeoMenuButton>
      </TeoNavTop>

      <TeoMenuUl>

      {
        menu.map((item) => {
          return (
            <DivM>
              <TeoMenuLi key={item.path}> <Link to={item.path}>{item.title}</Link>
              </TeoMenuLi>
                {/* {
                  item.children &&
                  <>
                    <SubMenu item={item}/>
                  </>
                } */}

            </DivM>
          )
        })
      }



    </TeoMenuUl>

    </TeoNavWrapper>
  );
}

export default TeoNav;
