import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120%;
  position: absolute;
  top: 0;
  left: 0;
  z-index:100;
  background-color: rgba(0,0,0, 0.7);
`;

export const ModalContainer = styled.div`

  background-color: var(--color-white);
  color: var(--color-grey-dark);
  max-width:50%;
  min-width: 30%;
  border-radius: 2px;
`;

export const ModalClose = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: var(--color-warning);
  }

  &::before {
    transform: rotate(45deg)
  }

  &::after {
    transform: rotate(-45deg)
  }
`;

export const ModalTile = styled.div`
  width:100%;
  display: flex;
  justify-content:center;
  font-size: 18px;
  font-weight: bold;

`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 2rem 1rem ;
  font-size: 12px;
  line-height: 1.6;

`;

export const ModalTitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
`;

