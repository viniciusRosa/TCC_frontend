import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TeoButton from '../../components/TeoButton';

import { TEOLoginContainer, Box, FormWrapper, LoginForm, Label, Input } from './styles'
import {FieldStyle} from '../../components/TeoField/styles'
function Login() {


  return (
    <TEOLoginContainer>
      <Box>
        <div>

        </div>
        <FormWrapper>
          <LoginForm>
          <FieldStyle>
            <Label>
              Email
              <Input />
            </Label>
          </FieldStyle>

            <Label>
              Senha
              <Input />
            </Label>

            <TeoButton primary>Entrar</TeoButton>
          </LoginForm>
        </FormWrapper>
      </Box>
    </TEOLoginContainer>
  );
}

export default Login;
