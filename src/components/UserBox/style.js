import styled from 'styled-components';


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem 0;
  padding: 1rem;

  border-radius: 5px;

  background-color: var(--color-primary);
`;

export const WrapperR = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;

  & p {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-white)
  }

  /* & button {
    display: flex;
    align-self: flex-end;
  } */
`;
