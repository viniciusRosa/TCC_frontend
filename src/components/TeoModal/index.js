import React from 'react';
import { Modal, ModalContainer, ModalClose, ModalContent } from './styles';
import TeoButton from '../TeoButton'

const TeoModal = ({children, activeModal, action}) => {
  return (
    <Modal>
      <ModalContainer>
        <ModalClose onClick={activeModal}></ModalClose>
        <ModalContent>Atenção!</ModalContent>
        <ModalContent>{children}</ModalContent>
        <ModalContent>
          <TeoButton onClick={action}>Confirmar</TeoButton>
          <TeoButton secondary >Cancelar</TeoButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default TeoModal;
