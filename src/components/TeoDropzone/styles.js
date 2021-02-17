import styled from 'styled-components';

export const DropzoneDiv = styled.div`
  height: 200px;
  background-color: var(--color-white);
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin-top: 2rem;
  margin-bottom: 2rem;
  outline: 0;
`;

export const DropImg = styled.img`
  width: 200px;
  /* height: 100%; */
  object-fit: cover;
`;

export const ImgText = styled.p`
  /* width: calc(100% - 60px);
  height: calc(100% - 60px); */
  width: 100%;
  max-width: 400px;
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
`;

export const DropzoneLabel = styled.p`
  color: var(--color-grey-dark);
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const DivLabel = styled.div`
  width: 100%;
  margin-bottom:1rem;
`;
