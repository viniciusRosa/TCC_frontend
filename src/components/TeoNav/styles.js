import styled from 'styled-components';
import logo from '../../assets/logoBranco.png'

export const Wrapper = styled.div`
  width: ${ props => props.status ? '0' : '200px' };
  /* flex-direction: ${ props => props.status ? 'row' : 'column' }; */
`;

export const TeoNavWrapper = styled.nav`
  display: ${ props => props.status ? 'none' : 'flex' };
  flex-direction: column;
  background-color: var(--color-white);

  & > ul {
    margin-top: 16px;
  }
`;

export const TeoLogo = styled.img.attrs({
  src: logo,
  alt: 'Logo do Teo'
})`
  height: 36px;
  margin-left: 20px;
`;

export const TeoMenuUl = styled.ul``;


export const TeoMenuLi = styled.li`
  display: flex;
  flex-direction: column;
  transition: background-color 0.5s ;
  cursor: pointer;

  &:hover {
  }

  & a:hover{
    // color: white;
    background-color: var(--color-grey-light);
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

`;

export const DivM = styled.div`

  & > ${TeoMenuUl}{
    margin-left: 2rem;
  }
`;
