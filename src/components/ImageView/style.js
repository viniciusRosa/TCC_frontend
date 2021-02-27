import styled from 'styled-components';

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 2rem;
`;

export const ImageTitle = styled.p`
  color: var(--color-grey-dark);
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;

`;
