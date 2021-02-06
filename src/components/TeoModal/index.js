import React from 'react';
import { Modal, ModalContainer, ModalClose, ModalContent, ModalTitleContent, ModalTile, ModalButton, ModalButtons } from './styles';
import TeoButton from '../TeoButton'


const Warning = ({children, closeModal, action, secondary}) => {
  return (
    <Modal>
      <ModalContainer>
        <ModalTitleContent>
          <ModalTile>
            <span>Atenção!</span>
          </ModalTile>
          <ModalClose onClick={closeModal} />
        </ModalTitleContent>
        <ModalContent>{children}</ModalContent>
        <ModalButtons>
          <TeoButton onClick={action}>Confirmar</TeoButton>
          <TeoButton secondary onClick={secondary}>Cancelar</TeoButton>
        </ModalButtons>
      </ModalContainer>
    </Modal>
  )
}

const Success = ({text, closeModal, button}) => {
  return (
    <Modal>
    <ModalContainer>
      <ModalTitleContent>
        <ModalTile>
        </ModalTile>
        <ModalClose onClick={closeModal} />
      </ModalTitleContent>
      <ModalContent>{text}</ModalContent>
      <ModalButton>
        <TeoButton onClick={button}>ok</TeoButton>
      </ModalButton>
    </ModalContainer>
  </Modal>
  )
}


export default {
  Warning,
  Success
};
