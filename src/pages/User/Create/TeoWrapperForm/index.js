import React, { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';
import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import { FormColums, ErrorMessage } from './styles';
import TeoModal from '../../../../components/TeoModal';
import { useUser } from '../../../../contexts/UserContext';
import { useHistory } from 'react-router-dom'


const TeoWrapperForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(null)

  const history = useHistory();

  const {
    createUser
  } = useUser()

  const { errors, trigger, reset, handleSubmit, ...methods } = useForm({
    resolver: yupResolver(schema),
  });

  const newUser = async (data) => {
    console.log(data)
    setModalIsActived(!modalIsActived)
    setLoading(true)
    try {
      await createUser(data);
      setLoading(false)
      setModalIsActivedSuccess(!modalIsActivedSuccess)
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

        <TeoForm onSubmit={handleSubmit(newUser)} ref={form}>

          <TeoField.Text label="Nome do usuário" type="text" name="name" register={methods.register} />
          {errors.name && (<ErrorMessage>{errors.name.message}</ErrorMessage>)}

          <TeoField.Text label="Email" type="text" name="email" register={methods.register} />
          {errors.email && (<ErrorMessage>{errors.email.message}</ErrorMessage>)}

          <TeoField.Text label="Senha" type="password" name="senha" register={methods.register} />
          {errors.senha && (<ErrorMessage>{errors.senha.message}</ErrorMessage>)}

          {modalIsActived && <TeoModal.Warning closeModal={activeModal} secondary={resetButtonModal}>Tem Certeza?</TeoModal.Warning>}
          {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Usuário cadastrado com sucesso'} button={resetButtonSuccess} />}
          {modalIsActivedError && <TeoModal.Success closeModal={activeModalError} text={'Algo deu Errado'} button={resetButtonError} />}
          {loading && <TeoModal.Loading />}

        </TeoForm>
      </FormProvider>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <button
          className="w3-button w3-teal w3-round"
          style={{ width: "25%" }}
          onClick={
            async () => {
              const result = await trigger();
              if (result) {
                activeModal()
              }
            }
          }>Cadastrar</button>

        <button
          className="w3-button w3-orange w3-round w3-text-white"
          style={{ width: "25%" }}
          onClick={
            () => history.push('/usuarios')
            }
          >Cancelar</button>
      </div>
    </>
  )
}

export default TeoWrapperForm;
