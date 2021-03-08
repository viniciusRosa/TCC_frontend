import styled, { css } from 'styled-components';
import logo from '../../assets/logoBranco.png'
import { FiMenu, FiX } from 'react-icons/fi'


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


export const TeoMenuUl = styled.ul`
  margin: 1rem 1rem;

`;

const hide = css`
  display: none;
`;

export const DivM = styled.div`
  border-bottom: 1px solid var(--color-grey-medium);

  & > ${TeoMenuUl}{
    margin-left: 2rem;
  }


`;


export const TeoMenuLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-light);
  }

  & > a {
    text-decoration: none;
    font-size: 16px;
    padding: 20px;
    color: var(--color-grey-dark);
  }
`;


export const TeoNenuSpan = styled.span`
  /* display: flex;
  justify-content: space-between; */

`;
