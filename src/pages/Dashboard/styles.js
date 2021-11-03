import styled from 'styled-components';

export const DivCreateNew = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const StyledTable = styled.table`

  width: 100%;

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


export const Subtitle = styled.p`

  color: var(--color-grey-dark);
  margin: 1rem;
  font-size: 1.3rem;

`;

export const Wrapper = styled.div`

  display: flex;
  justify-content: space-between;


  & > div {
    width: 100%;
    border: 0.5px solid var(--color-grey-medium);
    margin: 0.5rem;
    padding: 0 auto;
    box-sizing: border-box;

  }

  & > div:nth-child(2) {
    border: none;
  }

`;


export const InformationBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 2rem;
  width: 100%;

`;

export const Information = styled.div`
  border: 0.5px solid var(--color-grey-medium);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 240px;
  margin: 0.5rem;

  & > p {
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--color-grey-dark)
  }

  & > span {
    font-size: 5rem;
    color: var(--color-grey-medium)

  }
`;
