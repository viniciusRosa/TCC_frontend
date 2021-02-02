import styled from 'styled-components';


export const TeoMenuUl = styled.ul`
  margin: 1rem 2rem;
  /* border: 1px solid black; */

`;


export const TeoMenuLi = styled.li`
  padding: 2rem 1rem;
  margin: 1rem 1rem;
  border-bottom: 1px solid var(--color-grey-dark);
  color: var(--color-grey-dark);
  transition: color 0.5s;
    &:hover {
      color: var(--color-grey-medium);
    }
`;
