import React, { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';
import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import TeoButton from '../../../../components/TeoButton';
import { ErrorMessage } from './styles';
import TeoModal from '../../../../components/TeoModal';
import api from '../../../../services/api';

const TeoWrapperForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(null)

  const { errors, trigger, reset, handleSubmit, ...methods } = useForm({
    resolver: yupResolver(schema),
  });

  const newVehicle = async (data) => {
    setModalIsActived(!modalIsActived)
    console.log(data)
    setLoading(true)
    try {
      const formdata = new FormData(form.current);
      const response = await api.post('vehicles', data);
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
        <TeoForm onSubmit={handleSubmit(newVehicle)} ref={form}>

          <TeoField.Text label="Nome da Veículo" type="text" name="vehicle_name" register={methods.register} />
          {errors.vehicle_name && (<ErrorMessage>{errors.vehicle_name.message}</ErrorMessage>)}

          <TeoField.Text label="Documento" type="text" name="doc_number" register={methods.register} />
          {errors.doc_number && (<ErrorMessage>{errors.doc_number.message}</ErrorMessage>)}

          <TeoField.Text label="Lugares" type="string" name="seats" register={methods.register} />
          {errors.seats && (<ErrorMessage>{errors.seats.message}</ErrorMessage>)}

          {modalIsActived && <TeoModal.Warning closeModal={activeModal} secondary={resetButtonModal}>Tem Certeza?</TeoModal.Warning>}
          {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Escola inserida com sucesso'} button={resetButtonSuccess} />}
          {modalIsActivedError && <TeoModal.Success closeModal={activeModalError} text={'Algo deu Errado'} button={resetButtonError} />}
          {loading && <TeoModal.Loading />}

        </TeoForm>
      </FormProvider>

      <TeoButton primary
        onClick={async () => {
          const result = await trigger();
          if (result) {
            activeModal()
          }
        }} >Cadastrar</TeoButton>
    </>
  )
}

export default TeoWrapperForm;
