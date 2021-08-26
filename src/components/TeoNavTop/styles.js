import styled from 'styled-components';
import logo from '../../assets/logoBranco.png'
import { FiMenu } from 'react-icons/fi'


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

export const NavTop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;
  margin-left: 2.5rem;
`;

export const TeoMenuIcon = styled(FiMenu)`
  font-size: 36px;
  color: var(--color-white);
`;

export const TeoMenuButton = styled.a`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  margin-left: 1rem;
  border-radius: 4px;
  width: 40px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: white;

    & > ${TeoMenuIcon} {
      color: var(--color-primary);


    }
  }
`;


