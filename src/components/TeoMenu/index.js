import React from 'react';
import { TeoMenuUl, TeoMenuLi } from './styles';

const TeoMenu = () => {
  return (
    <TeoMenuUl>
      <TeoMenuLi>Dashboard </TeoMenuLi>
      <TeoMenuLi>Cadastrar </TeoMenuLi>
      <TeoMenuLi>listar </TeoMenuLi>

    </TeoMenuUl>
  );
}

export default TeoMenu;
