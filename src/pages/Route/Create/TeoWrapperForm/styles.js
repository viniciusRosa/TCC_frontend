import styled from 'styled-components';

export const FormColums = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:first-child {
    padding-right: 0.5rem;
  }

  & > div:not(:first-child) {
    padding-left: 0.5rem;
  }
`;


export const ErrorMessage = styled.span`
  display: block;
  padding: 0.5rem;
  border-radius: 2px;
  color: red;
`;

export const DivRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0 3rem;

  & > div {
    width: 100%;
    border: 0.5px solid var(--color-grey-medium);
    margin: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;

  }
`;

export const PointBox = styled.div`
  border: 1px solid var(--color-grey-medium);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;

  & > button {
    margin-top: 2rem;
    align-self: flex-end;
  }

`;

export const Subtitle = styled.p`

  color: var(--color-grey-dark);
  margin: 1rem;
  font-size: 1.3rem;

`;

