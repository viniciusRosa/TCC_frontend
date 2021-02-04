import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';

import TeoForm from '../TeoForm';
import TeoField from '../TeoField';
import TeoButton from '../TeoButton';

import styled from 'styled-components';


const ErrorMessage = styled.span`
  display: block;
  padding: 0.5rem;
  border-radius: 2px;
  color: red;

`;

const TeoUserForm = () => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });


  const newUser = (data) => {
    console.log(data)
  }

  return (
    <TeoForm onSubmit={handleSubmit(newUser)}>
      <TeoField.Text label="Nome da Escola" type="text" name="schoolName" register={register}/>
      {errors.schoolName && (<ErrorMessage>{errors.schoolName.message}</ErrorMessage>)}

      <TeoField.Text label="Email" type="text" name="email" register={register}/>
      {errors.email && (<ErrorMessage>{errors.email.message}</ErrorMessage>)}

      <TeoButton >Enviar</TeoButton>
    </TeoForm>
  )
}

export default TeoUserForm;
