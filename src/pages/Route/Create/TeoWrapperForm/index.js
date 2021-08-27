import React, { useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';
import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import { FormColums, ErrorMessage } from './styles';
import TeoModal from '../../../../components/TeoModal';
import { useHistory } from 'react-router-dom'
import { useRoute } from '../../../../contexts/RouteContext';

const TeoWrapperForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedShift, setSelectedShift] = useState('');
  const form = useRef(null)

  const history = useHistory();

  const {
    createRoute
  } = useRoute();


  const { errors, trigger, reset, handleSubmit, ...methods } = useForm({
    resolver: yupResolver(schema),
  });

  const handleshift = (event) => {
    const shift = event.target.value;
    setSelectedShift(shift)
  }

  const newRote = async (data) => {
    setModalIsActived(!modalIsActived)
    setLoading(true)
    try {
      await createRoute(data);
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

        <TeoForm onSubmit={handleSubmit(newRote)} ref={form}>

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
            () => history.push('/routes')
            }
          >Cancelar</button>
      </div>
    </>
  )
}

export default TeoWrapperForm;
