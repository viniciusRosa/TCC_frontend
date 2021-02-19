import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  margin-top: 1.5rem;

  border: 1px solid var(--color-grey-medium);
  border-radius: 2px;
`;


export const Left = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  padding-right: 1rem;
`;

export const Right = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  padding-left: 1rem;
`;
