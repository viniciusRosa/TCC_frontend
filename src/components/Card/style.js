import styled from 'styled-components';


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem 0;
  padding: 1rem;

  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: var(--color-primary);
`;

export const DivRow = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-around;


  margin: 2rem 0;

  & p:first-child {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  & p:last-child {
    color: white;
    font-size: 2rem;
  }

`;
