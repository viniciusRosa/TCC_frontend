import React, { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';
import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import { FormColums, ErrorMessage } from './styles';
import TeoModal from '../../../../components/TeoModal';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../../../contexts/UserContext';

const TeoWrapperForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const { state } = useLocation();
  const history = useHistory();


  const defaultValues = {
    name: state.user.name,
    email: state.user.email,
    password: state.user.password,
  }

  const { updateUser } = useUser()

  const { errors, trigger, reset, handleSubmit, ...methods } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  const handleUpdateUser = async (data) => {
    setModalIsActived(!modalIsActived)
    setLoading(true)
    try {
      await updateUser(state.user.id, data);
      setLoading(false)
      setModalIsActivedSuccess(!modalIsActivedSuccess)
      history.push('/usuarios')
    } catch (err) {
      console.log(err);
      setLoading(false)
      setModalIsActivedError(!modalIsActivedError)
    }
  }

  function activeModal() {
    setModalIsActived(!modalIsActived)
  }

  function activeModalSuccess() {
    setModalIsActivedSuccess(!modalIsActivedSuccess)
  }

  function activeModalError() {
    setModalIsActivedError(!modalIsActivedError)
  }

  function resetButtonModal() {
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
      <FormProvider {...methods}>

        <TeoForm onSubmit={handleSubmit(handleUpdateUser)} ref={form}>

          <TeoField.Text label="Nome" type="text" name="name" register={methods.register} />
          {errors.name && (<ErrorMessage>{errors.name.message}</ErrorMessage>)}

          <TeoField.Text label="Email" type="email" name="email" register={methods.register} />
          {errors.email && (<ErrorMessage>{errors.email.message}</ErrorMessage>)}

          <TeoField.Text label="Senha" type="password" name="password" register={methods.register} />
          {errors.password && (<ErrorMessage>{errors.password.message}</ErrorMessage>)}

          {modalIsActived && <TeoModal.Warning closeModal={activeModal} secondary={resetButtonModal}>Tem Certeza?</TeoModal.Warning>}
          {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Escola inserida com sucesso'} button={resetButtonSuccess} />}
          {modalIsActivedError && <TeoModal.Success closeModal={activeModalError} text={'Algo deu Errado'} button={resetButtonError} />}
          {loading && <TeoModal.Loading />}

        </TeoForm>
      </FormProvider>
      <FormColums>

        <button
          className="w3-button w3-teal w3-round"
          style={{ width: "25%" }}
          onClick={async () => {
            const result = await trigger();
            if (result) {
              activeModal()
            }
          }} >
            Salvar
        </button>

        <button
          className="w3-button w3-orange w3-round w3-text-white"
          style={{ width: "25%" }}
          onClick={
            () => history.push('/usuarios')
            }
          >
            Voltar
        </button>

      </FormColums>
    </>

  )
}

export default TeoWrapperForm;
