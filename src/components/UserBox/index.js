import React from 'react';
import { Container, WrapperR } from './style';
import { useHistory } from 'react-router-dom';



const UserBox = () => {

  const history = useHistory()

  const name = 'Vinicius Rosa'

  return (
    <Container>
      <WrapperR>
          <p>Olá, {name}</p>

          <button
          className="w3-button w3-orange w3-round w3-text-white"
          style={{ width: '30%' }}
          onClick={() => {history.push('/')}}>
            Sair
        </button>
      </WrapperR>

    </Container>
  )
}

export default UserBox;

