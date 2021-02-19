import styled, { css } from 'styled-components';

const primary = css`
  background-color: var(--color-primary);
`;

const secondary = css`
  background-color: var(--color-secondary);
`;

const warning = css`
  background-color: var(--color-warning);
`;

const TeoButton = styled.button`
  ${ props => props.primary && primary }
  ${ props => props.secondary &&  secondary};
  ${ props => props.warning &&  warning};
  border-radius: 2px;
  color: #fff;
  width: ${props => props.size ? props.size: '180px'};
  height: 3rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export default TeoButton;
