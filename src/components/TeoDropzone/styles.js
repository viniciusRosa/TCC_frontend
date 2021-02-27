import styled from 'styled-components';

export const DropzoneDiv = styled.div`
  min-height: 200px;
  width: 50%;
  background-color: var(--color-white);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  outline: 0;
`;

export const DropImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ImgText = styled.p`
  width: 100%;
  min-height: 300px;
  height: 100%;
  border-radius: 2px;
  border: 1px dashed var(--color-grey-dark);
  font-size: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-grey-dark);
  margin-top: 0.5rem;
`;

export const DropzoneLabel = styled.p`
  color: var(--color-grey-dark);
  font-weight: bold;
`;

export const DivLabel = styled.div`
  width: 100%;
  margin-bottom:1rem;
`;
