import React, { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';
import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import TeoButton from '../../../../components/TeoButton';
import { FormColums, ErrorMessage } from './styles';
import TeoModal from '../../../../components/TeoModal';
import api from '../../../../services/api';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import TeoDropzone from '../../../../components/TeoDropzone';
import ImageView from '../../../../components/ImageView';
import urlimage from '../../../../services/urlImage';

const TeoWrapperForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ufs, setUfs] = useState([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('')
  const [school, setSchool] = useState({});
  const form = useRef(null);
  const { state } = useLocation();
  const history = useHistory();


  const defaultValues = {
    vehicle_name: state.result.vehicle_name,
    doc_number: state.result.doc_number,
    seats: state.result.seats
  }

  const { errors, trigger, reset, handleSubmit, ...methods } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });



  const updateVehicle = async (data) => {

    setModalIsActived(!modalIsActived)
    setLoading(true)
    try {
      const response = await api.put(`vehicles/${state.result.id}`, data);
      setLoading(false)
      setModalIsActivedSuccess(!modalIsActivedSuccess)
      history.push('/vehicles')
    } catch (err) {
      console.log(err);
      setLoading(false)
      setModalIsActivedError(!modalIsActivedError)
    }
  }

  function goBack() {
    history.push('/vehicles')
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
        <TeoForm onSubmit={handleSubmit(updateVehicle)} ref={form}>

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
      <FormColums>
        <TeoButton primary
          onClick={async () => {
            const result = await trigger();
            if (result) {
              activeModal()
            }
          }} >Salvar</TeoButton>

        <TeoButton secondary onClick={goBack}>Voltar</TeoButton>

        </FormColums>
      </>

  )
}

export default TeoWrapperForm;
