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
import { usePoint } from '../../../../contexts/PointContext';

const TeoWrapperForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ufs, setUfs] = useState([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('')
  const form = useRef(null);
  const { state } = useLocation();
  const history = useHistory();


  const defaultValues = {
    name: state.point.name,
    address: state.point.address,
    cep: state.point.cep,
    city: state.point.city,
    complement: state.point.complement,
    district: state.point.district,
    number: state.point.number
  }

  const { updatePoint } = usePoint()

  const { errors, trigger, reset, handleSubmit, ...methods } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);
        setUfs(ufInitials);
      })
  }, []);

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);
        setCities(cityNames);
        console.log(cityNames);
      })
  }, [selectedUf]);

  const handleSelectedUF = (event) => {
    const uf = event.target.value;
    setSelectedUf(uf)
  }

  const handleSelectedCity = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  }

  const handleUpdatePoint = async (data) => {

    setModalIsActived(!modalIsActived)
    setLoading(true)
    try {
      await updatePoint(state.point.id, data);
      setLoading(false)
      setModalIsActivedSuccess(!modalIsActivedSuccess)
      history.push('/points')
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

        <TeoForm onSubmit={handleSubmit(handleUpdatePoint)} ref={form}>

          <TeoField.Text label="Nome do ponto" type="text" name="name" register={methods.register} />
          {errors.name && (<ErrorMessage>{errors.name.message}</ErrorMessage>)}

          <TeoField.Text label="Endereço" type="text" name="address" register={methods.register} />
          {errors.street && (<ErrorMessage>{errors.adress.message}</ErrorMessage>)}

          <FormColums>
            <TeoField.Text label="Numero" type="text" name="number" register={methods.register} mask='number' />
            <TeoField.Text label="Bairro" type="text" name="district" register={methods.register} />
          </FormColums>

          <FormColums>
            {errors.number ? (<ErrorMessage>{errors.number.message}</ErrorMessage>) : <div></div>}
            {errors.district ? (<ErrorMessage>{errors.district.message}</ErrorMessage>) : <div></div>}
          </FormColums>

          <TeoField.Text label="Complemento" type="text" name="complement" register={methods.register} />
          {errors.complement && (<ErrorMessage>{errors.complement.message}</ErrorMessage>)}

          <FormColums>
            <TeoField.Select size='20%' name='uf' label='UF' onChange={handleSelectedUF} value={selectedUf} register={methods.register}>
              <option value='0'>default</option>
              {
                ufs.map(uf => {
                  return (
                    <option key={uf} value={uf}>{uf}</option>
                  )
                })
              }

            </TeoField.Select>

            <TeoField.Select name='city' label='Cidade' onChange={handleSelectedCity} value={selectedCity} register={methods.register} >
              <option value='0'>cidade</option>
              {
                cities.map(city => {
                  return (
                    <option key={city} value={city}>{city}</option>
                  )
                })
              }
            </TeoField.Select>

            <TeoField.Text label="CEP" type="text" name="cep" mask='cep' register={methods.register} />

          </FormColums>

          <FormColums>
            {errors.uf ? (<ErrorMessage>{errors.uf.message}</ErrorMessage>) : <div></div>}
            {errors.city ? (<ErrorMessage>{errors.city.message}</ErrorMessage>) : <div></div>}
            {errors.cep ? (<ErrorMessage>{errors.cep.message}</ErrorMessage>) : <div></div>}
          </FormColums>

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
            () => history.push('/points')
            }
          >
            Voltar
        </button>

      </FormColums>
    </>

  )
}

export default TeoWrapperForm;
