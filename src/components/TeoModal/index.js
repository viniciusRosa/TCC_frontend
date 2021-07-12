import React from 'react';
import { Modal, ModalContainer, ModalClose, ModalContent, ModalTitleContent, ModalTile, ModalButton, ModalButtons } from './styles';
import TeoButton from '../TeoButton';
import TeoLoader from '../TeoLoader';
import { useForm } from 'react-hook-form';
import TeoForm from '../TeoForm';
import TeoField from '../TeoField';
import { useVacancy } from '../../contexts/VacancyContext';




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
          <TeoButton primary type='submit' onClick={action}>Confirmar</TeoButton>
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
        <TeoButton primary onClick={button}>ok</TeoButton>
      </ModalButton>
    </ModalContainer>
  </Modal>
  )
}

const Loading = () => {
  return (
    <Modal>
      <TeoLoader />
  </Modal>
  )
}

const SendMessage = ({closeModal, secondary, action}) => {

  const {
    setMessage,
  } = useVacancy()

  function handlemessage(value) {
    setMessage(value)
  }

  return (
    <Modal>
      <ModalContainer>
        <ModalTitleContent>
          <ModalTile>
            <span>Mensagem</span>
          </ModalTile>
          <ModalClose onClick={closeModal} />
        </ModalTitleContent>

          <TeoField.TextArea
            name='message'
            type='text'
            onChange={(event) => {handlemessage(event.target.value)}}
            placeholder='Mensagem'
            rows="5"
            cols="80" />

        <ModalButtons>
          <TeoButton primary onClick={action}>Enviar</TeoButton>
          <TeoButton secondary onClick={secondary}>Cancelar</TeoButton>
        </ModalButtons>
      </ModalContainer>
    </Modal>
  )
}


export default {
  Warning,
  Success,
  Loading,
  SendMessage
};
