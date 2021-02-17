import React, {useEffect, useRef, useState} from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';

import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import TeoButton from '../../../../components/TeoButton';

import { FormColums, ErrorMessage} from './styles';
import TeoModal from '../../../../components/TeoModal';

import api from '../../../../services/api';
import axios from 'axios';
import TeoDropzone from '../../../../components/TeoDropzone';


const TeoUserForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);


  const [ufs, setUfs] = useState([]);
  const [selectedUf, setSelectedUf] = useState('');

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('')

  const form = useRef(null)


  const { errors, trigger, reset, handleSubmit,  ...methods } = useForm({
    defaultValues: {
      school_name: 'polivalente'
    },
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

  const newSchool =  async (data) => {

    setModalIsActived(!modalIsActived)
    console.log(data)

    setLoading(true)
    try{
      const formdata = new FormData(form.current);
      // formdata.append('image', file)
      const response = await api.post('schools', formdata);
      console.log(response)
      setLoading(false)
      setModalIsActivedSuccess(!modalIsActivedSuccess)

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
    // reset({})
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

    <TeoForm onSubmit={handleSubmit(newSchool)}  ref={form}>

    <TeoDropzone accept='image/*' name='school' label='Foto da escola' text='Clique ou arraste'/>

      {/* <input type='file' name="image" id='image' ref={methods.register}/> */}

      <TeoField.Text label="Nome da Escola" type="text" name="school_name" register={methods.register}/>
      {errors.school_name && (<ErrorMessage>{errors.school_name.message}</ErrorMessage>)}

      <TeoField.Text label="Endereço" type="text" name="address" register={methods.register}/>
      {errors.street && (<ErrorMessage>{errors.adress.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Text label="Numero" type="text" name="number" register={methods.register} mask='number'/>
        <TeoField.Text label="Bairro" type="text" name="district" register={methods.register}/>
      </FormColums>

      <FormColums>
        {errors.number ? (<ErrorMessage>{errors.number.message}</ErrorMessage>) : <div></div>}
        {errors.district ? (<ErrorMessage>{errors.district.message}</ErrorMessage>) : <div></div>}
      </FormColums>

      <TeoField.Text label="Complemento" type="text" name="complement"  register={methods.register}/>
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

        <TeoField.Select name='city'  label='Cidade'  onChange={handleSelectedCity} value={selectedCity} register={methods.register} >
          <option value='0'>cidade</option>
          {
            cities.map(city => {
              return (
                <option key={city} value={city}>{city}</option>
              )
            })
          }
        </TeoField.Select>

        <TeoField.Text label="CEP" type="text" name="cep" mask='cep' register={methods.register}/>

      </FormColums>

      <FormColums>
        {errors.uf ? (<ErrorMessage>{errors.uf.message}</ErrorMessage>) : <div></div>}
        {errors.city ? (<ErrorMessage>{errors.city.message}</ErrorMessage>) : <div></div>}
        {errors.cep ? (<ErrorMessage>{errors.cep.message}</ErrorMessage>) : <div></div>}
      </FormColums>

      <TeoField.Text label="Email" type="text" name="email" register={methods.register} />
      {errors.email && (<ErrorMessage>{errors.email.message}</ErrorMessage>)}

      <FormColums>
        <TeoField.Text size='50%' label="Telefone" type="text" name="phone_number" mask='phone' placeholder='(00) 00000-00' register={methods.register}/>
      </FormColums>
      {errors.phone_number && (<ErrorMessage>{errors.phone_number.message}</ErrorMessage>)}


      {modalIsActived && <TeoModal.Warning closeModal={activeModal} secondary={resetButtonModal}>Tem Certeza?</TeoModal.Warning>}
      {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Escola inserida com sucesso'} button={resetButtonSuccess}/>}
      {modalIsActivedError && <TeoModal.Success closeModal={activeModalError} text={'Algo deu Errado'} button={resetButtonError}/>}
      {loading && <TeoModal.Loading/>}


    </TeoForm>
    </FormProvider>

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
