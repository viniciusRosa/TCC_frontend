import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index:100;
  background-color: rgba(0,0,0, 0.5);
`;

export const ModalContainer = styled.div`

  background-color: var(--color-white);
  color: var(--color-grey-dark);
  width: 40%;
  height: 40%;
  border-radius: 2px;


`;

export const ModalClose = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  position: relative;
  align-items: center;
  right: calc(-100% + 64px);
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

export const ModalContent = styled.div`


  &:nth-child(2n) {
    font-size: 16px;
    margin: 1rem;
  }

  &:nth-child(3n) {
    margin: 0 1rem 1rem 1rem;
    font-size:12px;
    line-height: 1.6;
    min-height: 72px;
  }

  &:nth-child(4n) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    bottom:100px;

  }

`;
