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
      width: 30%;
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

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  margin-bottom: 4rem;
`;


export const DivMessages =styled.div`
  background-color: var(--color-grey-light);
  border-radius: 5px;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export const DivMessage =styled.div`
  background-color: white;
  border-radius: 5px;
  width: 100%;
  padding: 2rem 0;
  border: 1px solid var(--color-grey-medium);

`;

export const DivMessageStudent =styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 2rem 0;
  width: 100%;
  border: 1px solid var(--color-grey-medium);
`;

export const TextMessage = styled.p`
  font-size: 14px;
  color: var(--color-grey-dark);
  padding: 1rem;
`;

export const DivstudentData = styled.div`
  align-self: flex-end;
  margin: 1rem 1rem;
  padding: 2rem 1rem;
  width: 80%;

  display: flex;
  flex-direction: column;

  & span {
    align-self: flex-end;
    font-size: 14px;
    color: var(--color-grey-dark);
    margin: 0 1rem 1rem 0
  }

`;

export const DivData = styled.div`
  margin: 1rem 1rem;
  padding: 2rem 1rem;
  width: 80%;

  display: flex;
  flex-direction: column;

  & span {
    font-size: 14px;
    color: var(--color-grey-dark);
    margin: 0 1rem 1rem 0
  }

`;

