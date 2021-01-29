import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import api from '../../services/api'
import Logo from '../../assets/logoBranco.png'
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const TEOContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TEODiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-dark);
  height: ${props => props.height.obj.height};
  width: ${props => props.height.obj.width};
`;

const LOGO = styled.img`
  margin-top: 20rem;
`;

const TEOLoginForm = styled.form`
  width: 86%;
  display: flex;
  flex-direction: column;


`;

const TEOinput = styled.input`
  margin-top:30rem;
  height: 30rem;
  &::placeholder {
    color: var(--color-grey-dark);
    opacity: 0.5;
    font-size:15rem;
    }
`;

const TEOLoginButton = styled.button`
  height: 40rem;
  background-color: var(--color-primary);
  border: none;
  transition: background-color 200ms;
  font-size: 18rem;
  font-weight: bold;
  color: var(--color-white);
  cursor: pointer;
  margin-top:30rem;
  &:hover {
    background-color: var(--color-primary-dark);

  }
`;

const TEOLink = styled.span`
  font-family: 'sans-serif';
  margin-top: 5rem;
  color:#fff;
  font-size: 15rem;
  text-align: right;
`;

function Login() {

  const history = useHistory();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    // const token = await api.post('signin', {
    //   email,
    //   password
    // })
    // console.log(token.data.accessToken)
    history.push('/dashboard')
  }

  const val = {
    obj: {
      height: '400rem',
      width: '500rem'

    }
  }

  return (

    <TEOContainer>
      <TEODiv height={val}>
        <LOGO src={Logo} alt=""/>

        <TEOLoginForm onSubmit={handleSubmit}>
          <TEOinput type="text" placeholder="Usuário"/>
          <TEOinput type="text" placeholder="Senha"/>
          <TEOLink>Esqueci minha senha</TEOLink>

          <TEOLoginButton type="submit">Entrar</TEOLoginButton>
        </TEOLoginForm>

      </TEODiv>
    </TEOContainer>

  );
}

export default Login;
