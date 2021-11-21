import styled from 'styled-components';

export const DivHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  & div {
    display: flex;
    align-items: center;

    & img {
      margin-right: 1rem;
      object-fit: cover;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    & p {
      color: #414d6a;
      font-size: 1.2rem;
      font-weight: bold;
    }

  }

  & a {
      margin-right: 2rem;
      text-decoration: none;
      font-weight: bold;
      color: var(--color-grey-dark);
    }

  & a:hover {
    color: #414d6a;
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

export const Title = styled.p`
  color: #414d6a;
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;

`;

export const CheckBox = styled.div`
  margin: 2rem;

  & > label {
    padding: 2rem;
    font-size: 1.6rem;
    color: var(--color-grey-dark);
    display: flex;
    align-items: center;
  }

  & > label > input {
    width: 2rem;
    margin-right: 1rem;
    width: 1.6rem;
    height: 1.6rem;
  }
`;
