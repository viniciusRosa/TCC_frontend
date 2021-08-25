import styled from 'styled-components';

export const DivHead = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 2rem;

& p {
  color: #414d6a;
  font-size: 2rem;
}

`;

export const ViewTable = styled.table`
  width: 100%;
  padding: 2rem;
  /* border: 1px solid red; */
`;

export const TableHead = styled.thead`

  border-bottom: 1px solid var(--color-grey-medium);

`;

export const TableRow = styled.tr`

  border-bottom: 1px solid var(--color-grey-medium);

  & td:first-child {
      border-right: 1px solid var(--color-grey-medium);
      width: 50%;
      text-align: right;
  }

  & td {
      padding: 2rem;
      color: #414d6a;
      font-size: 1.2rem;

  }

`;

export const TableD = styled.td`

`;
