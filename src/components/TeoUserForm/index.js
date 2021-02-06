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
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false)


  const { register, handleSubmit, errors, trigger, reset } = useForm({
    resolver: yupResolver(schema),
  });


  const newUser = async (data) => {
    console.log(data)
    reset({})
    setModalIsActived(!modalIsActived)
    setModalIsActivedSuccess(!modalIsActivedSuccess)

  }

  function activeModal(){
    setModalIsActived(!modalIsActived)
  }


  function activeModalSuccess(){
    setModalIsActivedSuccess(!modalIsActivedSuccess)
  }

  function resetButtonModal() {
    reset({})
    setModalIsActived(!modalIsActived)
  }

  function resetButtonSuccess() {
    reset({})
    setModalIsActivedSuccess(!modalIsActivedSuccess)
  }



  return (
    <>
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


      {modalIsActived && <TeoModal.Warning closeModal={activeModal} secondary={resetButtonModal}>Tem Certeza?</TeoModal.Warning>}
      {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Escola inserida com sucesso'} button={resetButtonSuccess}/>}


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
