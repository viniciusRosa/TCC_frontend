import React from 'react';
import { TeoMenuUl, TeoMenuLi, TeoNenuSpan } from './styles';
import { FiChevronLeft } from 'react-icons/fi'

const TeoMenu = () => {
  return (
    <TeoMenuUl>
      <TeoMenuLi> <TeoNenuSpan>Dashboard <FiChevronLeft size='16px' /> </TeoNenuSpan> </TeoMenuLi>
      <TeoMenuLi> <TeoNenuSpan>Dashboard <FiChevronLeft size='16px' /> </TeoNenuSpan> </TeoMenuLi>
      <TeoMenuLi> <TeoNenuSpan>Dashboard <FiChevronLeft size='16px' /> </TeoNenuSpan>  </TeoMenuLi>
      <TeoMenuLi> <TeoNenuSpan>Dashboard <FiChevronLeft size='16px' /> </TeoNenuSpan>
        <TeoMenuUl>
        <TeoMenuLi>Cadastrar </TeoMenuLi>
        <TeoMenuLi>Cadastrar </TeoMenuLi>

        </TeoMenuUl>
      </TeoMenuLi>
      <TeoMenuLi> <TeoNenuSpan>Dashboard <FiChevronLeft size='16px' /> </TeoNenuSpan>  </TeoMenuLi>
    </TeoMenuUl>

  );
}

export default TeoMenu;
