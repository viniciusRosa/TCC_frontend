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

import api from '../../services/api';


const ErrorMessage = styled.span`
  display: block;
  padding: 0.5rem;
  border-radius: 2px;
  color: red;

`;

const TeoUserForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false)
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false)
  const [modalIsActivedError, setModalIsActivedError] = useState(false)


  const { register, handleSubmit, errors, trigger, reset } = useForm({
    resolver: yupResolver(schema),
  });


  const newUser = async (data) => {
    console.log(data)
    reset({})
    setModalIsActived(!modalIsActived)
    const response = await api.post('schools', data);
    if (response.status == 200) {
      setModalIsActivedSuccess(!modalIsActivedSuccess)
    }

    if (response.status != 200) {
      setModalIsActivedError(!modalIsActivedError)
    }

  }

  function activeModal(){
    setModalIsActived(!modalIsActived)
  }

  function activeModalSuccess(){
    setModalIsActivedSuccess(!modalIsActivedSuccess)
  }

  function activeModalError(){
    setModalIsActivedError(!modalIsActivedError)
  }

  function resetButtonModal() {
    reset({})
    setModalIsActived(!modalIsActived)
  }

  function resetButtonSuccess() {
    reset({})
    setModalIsActivedSuccess(!modalIsActivedSuccess)
  }

  function resetButtonError() {
    reset({})
    setModalIsActivedError(!modalIsActivedError)
  }



  return (
    <>
    <TeoForm onSubmit={handleSubmit(newUser)}>


      <TeoField.Text label="Nome da Escola" type="text" name="school_name" register={register}/>
      {errors.school_name && (<ErrorMessage>{errors.school_name.message}</ErrorMessage>)}

      <TeoField.Text label="Rua" type="text" name="street" register={register}/>
      {errors.street && (<ErrorMessage>{errors.street.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Text label="Numero" type="number" name="number" register={register}/>
        <TeoField.Text label="Bairro" type="text" name="district" register={register}/>
      </FormColums>

      <FormColums>
        {errors.number ? (<ErrorMessage>{errors.number.message}</ErrorMessage>) : <div></div>}
        {errors.district ? (<ErrorMessage>{errors.district.message}</ErrorMessage>) : <div></div>}
      </FormColums>


      <TeoField.Text label="Complemento" type="text" name="complement" register={register}/>
      {errors.complement && (<ErrorMessage>{errors.complement.message}</ErrorMessage>)}

      <TeoField.Text label="Email" type="email" name="email" register={register}/>
      {errors.email && (<ErrorMessage>{errors.email.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Text label="Telefone" type="number" name="phone_number" register={register}/>
      </FormColums>
      {errors.phone_number && (<ErrorMessage>{errors.phone_number.message}</ErrorMessage>)}


      {modalIsActived && <TeoModal.Warning closeModal={activeModal} secondary={resetButtonModal}>Tem Certeza?</TeoModal.Warning>}
      {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Escola inserida com sucesso'} button={resetButtonSuccess}/>}
      {modalIsActivedError && <TeoModal.Success closeModal={activeModalError} text={'Algo deu Errado'} button={resetButtonError}/>}


    </TeoForm>
    <TeoButton
      onClick={async () => {
        const result = await trigger();
        if(result) {
          activeModal()
        }
    }} >Cadastrar</TeoButton>

    </>
  )
}

export default TeoUserForm;
