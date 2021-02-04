import styled, { css } from 'styled-components';

const primary = css`
  background-color: var(--color-primary);
`;

const secondary = css`
  background-color: var(--color-secondary);
`;

const TeoButton = styled.button`
  ${ props => props.secondary ?  secondary : primary};
  border-radius: 2px;
  color: #fff;
  width: 180px;
  height: 3rem;
  /* margin-top: 3rem; */
  cursor: pointer;
`;

export default TeoButton;
