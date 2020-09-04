import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import api from '../../services/api'
import Logo from '../../assets/logoBranco.png'

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
  height: 400rem;
  width: 400rem;
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
  color:#fff;
  font-size: 15rem;
  text-align: right;
`;



function Login({ history }) {

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

  return (

    <TEOContainer>
      <TEODiv>
        <LOGO src={Logo} alt=""/>

        <TEOLoginForm>
          <TEOinput type="text" placeholder="Usuário"/>
          <TEOinput type="text" placeholder="Senha"/>
          <TEOLink>Esqueci minha senha</TEOLink>

          <TEOLoginButton>Entrar</TEOLoginButton>
        </TEOLoginForm>

      </TEODiv>
    </TEOContainer>

  );
}

export default Login;
