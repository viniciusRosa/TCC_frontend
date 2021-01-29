import styled from 'styled-components';
import logo from '../../assets/logoBranco.png'
import {FiMenu } from 'react-icons/fi'


export const TeoNavWrapper = styled.nav`
  display:flex;
  flex-direction: column;
  /* position: fixed; */
  width: 256px;
  height: 100%;
  background-color: var(--color-white);
`;

export const TeoNavTop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;
  background-color: var(--color-primary);

`;

export const TeoLogo = styled.img.attrs({
  src: logo,
  alt: 'Logo doTeo'
})`
  height: 36px;
  margin-left: 20px;
`;

export const TeoMenuButton = styled.a`
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const TeoMenuIcon = styled(FiMenu)`
  font-size: 36px;
  color: var(--color-white);

`;
