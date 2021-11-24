import React, { useState } from 'react';
import TeoButton from '../../components/TeoButton';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


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

  const { signIn } = useAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function handleSubmit(e) {
    e.preventDefault();

    if (email === '' || password === '') {
      alert("Email ou senha vazios.")
      return
    }
    try {
      const response = await signIn(email, password);

      history.push({
        pathname: '/dashboard'
      })

    } catch (err) {

      alert("Email ou senha inválidos.")
      console.log(err)

    }
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
