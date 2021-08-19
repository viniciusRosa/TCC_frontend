import styled from 'styled-components';


export const Item = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 50px;
  margin-top: 1.5rem;
  border-bottom: 1px solid var(--color-grey-medium);
  border-radius: 2px;
`;

export const ContentLink = styled.p`
  color: var(--color-grey-dark);
  font-size: 1rem;
  font-weight: bold;
`;

export const DivColumn = styled.div`
display: flex;
  justify-content:center;
  align-items: center;
  padding-right: 1rem;
  width: 100%;
  border : 1px solid white;
`;
