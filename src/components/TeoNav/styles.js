import styled, { css } from 'styled-components';
import logo from '../../assets/logoBranco.png'
import { FiMenu, FiX } from 'react-icons/fi'

export const Wrapper = styled.div`
  width: ${ props => props.status ? '0' : '200px' };
  /* flex-direction: ${ props => props.status ? 'row' : 'column' }; */
`;

export const TeoNavWrapper = styled.nav`
  display: ${ props => props.status ? 'none' : 'flex' };
  flex-direction: column;
  background-color: var(--color-white);

  & > ul {
    margin-top: 56px;
  }
`;

export const NavTop = styled.nav`
display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;
  // background-color: var(--color-primary);
`;

export const TeoLogo = styled.img.attrs({
  src: logo,
  alt: 'Logo do Teo'
})`
  height: 36px;
  margin-left: 20px;
`;

export const TeoMenuUl = styled.ul`

`;

const hide = css`
  display: none;
`;

export const TeoMenuLi = styled.li`
  display: flex;
  flex-direction: column;
  transition: background-color 0.5s ;
  cursor: pointer;

  &:hover {
  }

  & a:hover{
    color: white;
    background-color: var(--color-grey-dark);
  }

  & > a {
    text-decoration: none;
    font-size: 1.2rem;
    padding: 20px;
    color: var(--color-grey-dark);
    border-bottom: 1px solid  #efefef;
    border-left: 1px solid #efefef;
  }

  & ul {
    margin-left: 2rem;
  }

  & ul li a {

  }
`;

export const DivM = styled.div`

  & > ${TeoMenuUl}{
    margin-left: 2rem;
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
  margin-left: 1rem;
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
