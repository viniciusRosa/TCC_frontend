import styled from 'styled-components';


export const TeoMenuUl = styled.ul`
  margin: 1rem 2rem;

`;


export const TeoMenuLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 2rem 1rem;
  margin: 1rem 1rem;
  border-bottom: 1px solid var(--color-grey-dark);
  color: var(--color-grey-dark);
  transition: color 0.5s;
  cursor: pointer;


  & > ${TeoMenuUl}{
    display:flex;
    flex-direction: column

  }

    & > ${TeoMenuUl} li {
      align-items: flex-end;
      border: none;

    }

    &:hover {
      color: var(--color-grey-medium);
    }
`;

export const TeoNenuSpan = styled.span`
  display: flex;
  justify-content: space-between;

`;
