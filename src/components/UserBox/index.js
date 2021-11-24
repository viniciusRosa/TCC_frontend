import React, { useEffect } from 'react';
import { Container, WrapperR } from './style';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';



const UserBox = () => {

  const { user, setUser, reSignin } = useAuth();

  useEffect(() => {
    reSignin()
  }, [])

  const history = useHistory()

  const name = 'Vinicius Rosa'

  return (
    <Container>
      <WrapperR>
          <p>Olá, {user.name}</p>

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

