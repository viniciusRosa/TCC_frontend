import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/logoBranco.png'


export const TeoNav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 56px;
  width: 100%;
  background-color: var(--color-primary);
`;

export const TeoLogo = styled.img.attrs({
  src: logo,
  alt: 'Logo do Teo'
})`
  height: 36px;
  margin-left: 20px;
`;


