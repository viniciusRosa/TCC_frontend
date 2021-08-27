import React from 'react';
import { Modal, ModalContainer, ModalClose, ModalContent, ModalTitleContent, ModalTile, ModalButton, ModalButtons } from './styles';
import TeoLoader from '../TeoLoader';
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
          <button
            className="w3-button w3-teal w3-round"
            style={{ width: '30%' }}
            type='submit'
            onClick={action}>
              Confirmar
          </button>

          <button
            className="w3-button w3-orange w3-round w3-text-white"
            style={{ width: '30%' }}
            onClick={secondary}>
              Cancelar
          </button>
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
        <button
          className="w3-button w3-teal w3-round"
          style={{ width: '30%' }}
          onClick={button}>
            ok
        </button>
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <TeoField.TextArea
            name='message'
            type='text'
            onChange={(event) => {handlemessage(event.target.value)}}
            placeholder='Mensagem'
            rows="5"
            
            // cols="100" 
            />

        </div>

        <ModalButtons>
          <button
              className="w3-button w3-teal w3-round"
              style={{ width: '30%' }}
              type='submit'
              onClick={action}>
                Confirmar
            </button>

            <button
              className="w3-button w3-orange w3-round w3-text-white"
              style={{ width: '30%' }}
              onClick={secondary}>
                Cancelar
            </button>
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
