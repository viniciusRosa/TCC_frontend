import React, { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';
import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import { FormColums, ErrorMessage } from './styles';
import TeoModal from '../../../../components/TeoModal';
import { useLocation, useHistory } from 'react-router-dom';
import { useRoute } from '../../../../contexts/RouteContext';

const TeoWrapperForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const { state } = useLocation();
  const history = useHistory();
  const [selectedShift, setSelectedShift] = useState('');


  const defaultValues = {
    name: state.route.name,
    vacancy: state.route.vacancy,
    shift: state.route.shift,
  }

  const { updateRoute } = useRoute()

  const { errors, trigger, reset, handleSubmit, ...methods } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  const handleshift = (event) => {
    const shift = event.target.value;
    setSelectedShift(shift)
  }

  const handleupdateRoute = async (data) => {

    setModalIsActived(!modalIsActived)
    setLoading(true)
    try {
      await updateRoute(state.routes.id, data);
      setLoading(false)
      setModalIsActivedSuccess(!modalIsActivedSuccess)
      history.push('/routes')
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

        <TeoForm onSubmit={handleSubmit(handleupdateRoute)} ref={form}>

          <TeoField.Text label="Nome da rota" type="text" name="name" register={methods.register} />
          {errors.name && (<ErrorMessage>{errors.name.message}</ErrorMessage>)}

          <TeoField.Text label="Vagas" type="text" name="vacancy" register={methods.register} />
          {errors.vacancy && (<ErrorMessage>{errors.vacancy.message}</ErrorMessage>)}

          <FormColums>
            <TeoField.Select size='20%' name='shift' label='Turno' onChange={handleshift} value={selectedShift} register={methods.register}>
              <option value='Manhã'>Manhã</option>
              <option value='Tarde'>Tarde</option>
              <option value='Noite'>Noite</option>


            </TeoField.Select>

          </FormColums>

          {modalIsActived && <TeoModal.Warning closeModal={activeModal} secondary={resetButtonModal}>Tem Certeza?</TeoModal.Warning>}
          {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Rota inserida com sucesso'} button={resetButtonSuccess} />}
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
            () => history.push('/routes')
          }
        >
          Voltar
        </button>

      </FormColums>
    </>

  )
}

export default TeoWrapperForm;
