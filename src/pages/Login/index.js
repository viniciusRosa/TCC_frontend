import React, { useState } from 'react';
import TeoButton from '../../components/TeoButton';
import { useHistory } from 'react-router-dom';


import {
  TEOLoginContainer,
  Box,
  FormWrapper,
  LoginForm,
  Label,
  Input,
  ForgetPassaword,
  TeoLogo } from './styles'


function Login() {

  const history = useHistory();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleSubmit(e) {
    e.preventDefault();

    history.push({
      pathname: '/dashboard',
    })

  }

  return (
    <TEOLoginContainer>
      <Box>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <TeoLogo />
        </div>
        <FormWrapper>
          <LoginForm onSubmit={handleSubmit}>
            <Label>
              <Input
              name='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              />
            </Label>

            <Label>
              <Input
              name='password'
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              />
            </Label>

            <TeoButton primary
            style={{
              marginTop: '1rem'
            }}>Entrar</TeoButton>
          </LoginForm>

            <ForgetPassaword>
              <a href='#'>Esqueci minha senha.</a>
            </ForgetPassaword>

        </FormWrapper>
      </Box>
    </TEOLoginContainer>
  );
}

export default Login;
