import styled, { css } from 'styled-components';
import logo from '../../assets/logoBranco.png'
import { FiMenu, FiX } from 'react-icons/fi'

export const Wrapper = styled.div`
  position: relative;
  width: ${ props => props.status ? '0' : '256px' };
  /* flex-direction: ${ props => props.status ? 'row' : 'column' }; */
`;

export const TeoNavWrapper = styled.nav`
  position:relative;
  display: ${ props => props.status ? 'none' : 'flex' };
  flex-direction: column;
  /* width: 256px;
  height: 100%; */
  background-color: var(--color-white);
`;

export const NavTop = styled.nav`
  display: flex;
  justify-content: space-between;
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

export const TeoMenuUl = styled.ul`
  /* margin: 1rem 1rem; */
`;

const hide = css`
  display: none;
`;

export const DivM = styled.div`
  /* border-right: 1px solid var(--color-grey-medium); */
  border-bottom: 1px solid var(--color-grey-medium);


  & > ${TeoMenuUl}{
    margin-left: 2rem;
  }
`;

export const TeoMenuLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 1rem 1rem; */
  transition: background-color 0.5s ;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-light);
  }

  & > a {
    text-decoration: none;
    font-size: 1.2rem;
    padding: 20px;
    color: var(--color-grey-dark);
  }
`;


export const TeoMenuIcon = styled(FiMenu)`
  font-size: 36px;
  color: var(--color-white);
`;


export const TeoMenuButton = styled.a`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  width: 40px;
  position: relative;
  left: ${ props => props.status ? '40px' : '0' };
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: white;
    & > ${TeoMenuIcon} {
      color: var(--color-primary);
    }
  }
`;
