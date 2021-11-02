import styled from 'styled-components';

export const DivCreateNew = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const StyledTable = styled.table`

  & tr {

    }

  & tr th {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 2rem 0;
    color: var(--color-grey-dark)
  }



  & tr td {
    padding: 2rem 0;
    color: var(--color-grey-dark)
  }

  & tr:not(:first-child):hover {
    background-color: var(--color-grey-medium);
    & td {
      color: white;
    }
  }

`;
