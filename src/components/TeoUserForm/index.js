import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';

import TeoForm from '../TeoForm';
import TeoField from '../TeoField';
import TeoButton from '../TeoButton';

import styled from 'styled-components';
import {FormColums} from './styles';
import TeoModal from '../TeoModal';


const ErrorMessage = styled.span`
  display: block;
  padding: 0.5rem;
  border-radius: 2px;
  color: red;

`;

const TeoUserForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false)
  const [confirmed, setConfirmed] = useState(null)


  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function activeModal(callback) {
  }



  const newUser = async (data) => {

  }


  return (
    <TeoForm onSubmit={handleSubmit(newUser)}>
      <TeoField.Text label="Nome da Escola" type="text" name="schoolName" register={register}/>
      {errors.schoolName && (<ErrorMessage>{errors.schoolName.message}</ErrorMessage>)}

      <TeoField.Text label="Rua" type="text" name="rua" register={register}/>
      {errors.rua && (<ErrorMessage>{errors.rua.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Text label="Numero" type="number" name="numero" register={register}/>
        <TeoField.Text label="Bairro" type="text" name="bairro" register={register}/>
      </FormColums>

      <FormColums>
        {errors.numero ? (<ErrorMessage>{errors.numero.message}</ErrorMessage>) : <div></div>}
        {errors.bairro ? (<ErrorMessage>{errors.bairro.message}</ErrorMessage>) : <div></div>}
      </FormColums>


      <TeoField.Text label="Complemento" type="text" name="complemento" register={register}/>
      {errors.complemento && (<ErrorMessage>{errors.complemento.message}</ErrorMessage>)}

      <TeoField.Text label="Email" type="email" name="email" register={register}/>
      {errors.email && (<ErrorMessage>{errors.email.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Text label="Telefone" type="number" name="telefone" register={register}/>
      </FormColums>
      {errors.telefone && (<ErrorMessage>{errors.telefone.message}</ErrorMessage>)}

      <FormColums>
        <TeoButton type="submit">Enviar</TeoButton>
        {modalIsActived && <TeoModal activeModal={activeModal} action={() => true}>Tem Certeza?</TeoModal>}
        <TeoButton secondary>Cancelar</TeoButton>
      </FormColums>

    </TeoForm>
  )
}

export default TeoUserForm;
