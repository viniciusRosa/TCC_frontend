import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';

import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import TeoButton from '../../../../components/TeoButton';

import { FormColums, ErrorMessage} from './styles';
import TeoModal from '../../../../components/TeoModal';

import api from '../../../../services/api';
import axios from 'axios';


const TeoUserForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);


  const [ufs, setUfs] = useState([]);
  const [selectedUf, setSelectedUf] = useState('');

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('')

  const { register, handleSubmit, errors, trigger, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(()=>{
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);
      setUfs(ufInitials);
    })
  },[]);

  useEffect(()=>{
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
    .then(response => {
      const cityNames = response.data.map(city => city.nome);
      setCities(cityNames);
      console.log(cityNames);
    })
  },[selectedUf]);

  const handleSelectedUF = (event) => {
    const uf = event.target.value;
    setSelectedUf(uf)
  }

  const handleSelectedCity = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  }

  const newSchool = async (data) => {

    setModalIsActived(!modalIsActived)
    setLoading(true)
    try{
      const response = await api.post('schools', data);
      console.log(response)
      if (response.data === 'ok' ) {
        setLoading(false)
        setModalIsActivedSuccess(!modalIsActivedSuccess)
        }

    } catch(err) {
      console.log(err);
      setLoading(false)
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
    <TeoForm onSubmit={handleSubmit(newSchool)}>

      <TeoField.Text label="Nome da Escola" type="text" name="school_name" register={register}/>
      {errors.school_name && (<ErrorMessage>{errors.school_name.message}</ErrorMessage>)}

      <TeoField.Text label="Endereço" type="text" name="address" register={register}/>
      {errors.street && (<ErrorMessage>{errors.adress.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Text label="Numero" type="text" name="number" register={register}/>
        <TeoField.Text label="Bairro" type="text" name="district" register={register}/>
      </FormColums>

      <FormColums>
        {errors.number ? (<ErrorMessage>{errors.number.message}</ErrorMessage>) : <div></div>}
        {errors.district ? (<ErrorMessage>{errors.district.message}</ErrorMessage>) : <div></div>}
      </FormColums>

      <TeoField.Text label="Complemento" type="text" name="complement"  register={register}/>
      {errors.complement && (<ErrorMessage>{errors.complement.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Select size='20%' name='uf' label='UF' onChange={handleSelectedUF} value={selectedUf} register={register}>
          <option value='0'>default</option>
          {
            ufs.map(uf => {
              return (
                <option key={uf} value={uf}>{uf}</option>
              )
            })
          }

        </TeoField.Select>

        <TeoField.Select name='city'  label='Cidade'  onChange={handleSelectedCity} value={selectedCity} register={register} >
          <option value='0'>cidade</option>
          {
            cities.map(city => {
              return (
                <option key={city} value={city}>{city}</option>
              )
            })
          }
        </TeoField.Select>

        <TeoField.Text label="CEP" type="text" name="cep" mask='cep' register={register}/>

      </FormColums>

      <FormColums>
        {errors.uf ? (<ErrorMessage>{errors.uf.message}</ErrorMessage>) : <div></div>}
        {errors.city ? (<ErrorMessage>{errors.city.message}</ErrorMessage>) : <div></div>}
        {errors.cep ? (<ErrorMessage>{errors.cep.message}</ErrorMessage>) : <div></div>}
      </FormColums>

      <TeoField.Text label="Email" type="text" name="email" register={register} />
      {errors.email && (<ErrorMessage>{errors.email.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Text size='50%' label="Telefone" type="text" name="phone_number" mask='phone' placeholder='(00) 00000-00' register={register}/>
      </FormColums>
      {errors.phone_number && (<ErrorMessage>{errors.phone_number.message}</ErrorMessage>)}


      {modalIsActived && <TeoModal.Warning closeModal={activeModal} secondary={resetButtonModal}>Tem Certeza?</TeoModal.Warning>}
      {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Escola inserida com sucesso'} button={resetButtonSuccess}/>}
      {modalIsActivedError && <TeoModal.Success closeModal={activeModalError} text={'Algo deu Errado'} button={resetButtonError}/>}
      {loading && <TeoModal.Loading/>}


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
