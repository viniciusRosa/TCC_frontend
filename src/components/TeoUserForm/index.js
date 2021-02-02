import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation'

import TeoForm from '../TeoForm'
import TeoField from '../TeoField'
import TeoButton from '../TeoButton';


const TeoUserForm = () => {



  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });


  const newUser = (data) => {
    console.log(data)
  }

  return (
    <TeoForm onSubmit={handleSubmit(newUser)}>
      <TeoField.Text label="Email" type="text" name="email" register={register}/>
      {errors.email?.message}
      <TeoButton>Enviar</TeoButton>
    </TeoForm>
  )
}

export default TeoUserForm;
