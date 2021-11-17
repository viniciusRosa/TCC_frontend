import React, { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';
import TeoForm from '../../../../components/TeoForm';
import TeoField from '../../../../components/TeoField';
import { FormColums, ErrorMessage } from './styles';
import TeoModal from '../../../../components/TeoModal';
import { useHistory } from 'react-router-dom'
import { useRoute } from '../../../../contexts/RouteContext';
import { usePoint } from '../../../../contexts/PointContext';
import TeoPointForm from '../../../Point/Create/TeoPointForm';


import {
  DivRow,
  PointBox,
  Subtitle
} from './styles';

const TeoWrapperForm = () => {

  const [modalIsActived, setModalIsActived] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedShift, setSelectedShift] = useState('');
  const form = useRef(null);

  const [pointLoaded, setPointLoaded] = useState([]);

  const [selectedPoints, setSelectedPoints] = useState([{id: 0, name: 'saida'}, {id:0, name: 'parada'}, {id: 0, name: 'chegada'}]);
  const [adicionalPoint, setAdicionalPoint] = useState([]);
  const [finalPoint, setFinalPoint] = useState([]);


  const history = useHistory();

  const {
    createRoute
  } = useRoute();

  const {
    loadPointList,
    isUpdated
  } = usePoint();

  useEffect(() => {
    async function getPoints() {
      const points = await loadPointList();
      setPointLoaded(points)
    }

    getPoints();

  }, [isUpdated])

  const { errors, trigger, reset, handleSubmit, ...methods } = useForm({
    resolver: yupResolver(schema),
  });

  const handleshift = (event) => {
    const shift = event.target.value;
    setSelectedShift(shift)
  }

  const handlePointlist = (event) => {
    const {name, value} = event.target;

    if (name === 'saida') {
      const pointsArray = selectedPoints;
      pointsArray.splice(0, 1, {
          id: value,
          name: 'saida'
        })
       setSelectedPoints(pointsArray);
    }

    if (name === 'chegada') {

      const pointsArray = selectedPoints;
      pointsArray.splice(2, 1, {
        id: value,
        name: 'chegada'
          })
        setSelectedPoints(pointsArray);
    }

    if (name === 'pontoDeParada') {
      const pointsArray = selectedPoints;
      pointsArray.splice(1, 1, {
        id: value,
        name: 'parada 1'
          })
        setSelectedPoints(pointsArray);
    }
  }

  const addNewPoint = () => {

    setAdicionalPoint([...adicionalPoint, {
      id: adicionalPoint.length + 1,
    }]);

  }
  console.log(adicionalPoint)

  const handlePointAdicionalList = (event) => {

    // const {name, value} = event.target;

    // const pointsArray = adicionalPoint;

      // pointsArray.splice(Number(name), 1, {
      //     id: value,
      //     name: `parada ${Number(name) + 2}`
      //   })
      //  setAdicionalPoint(pointsArray);

      // setAdicionalPoint([...adicionalPoint, {id: name}])
      // console.log(adicionalPoint)
  }

  const mergeArrayPoints = () => {
    const points = selectedPoints;
    const adicional = adicionalPoint;

    adicional.map( ad => {
      points.splice(points.length - 1, 0, ad)
    })
    setFinalPoint(points)
    console.log(points)
  }

  const deletePoint = (id) => {
    const pointsArray = adicionalPoint;

    const filteredItems = pointsArray.filter(item => item.id !== id)

    console.log(id)

    setAdicionalPoint(filteredItems)
  }

  const newRote = async (data) => {
    setModalIsActived(!modalIsActived)
    // setLoading(true)

    // try {
    //   await createRoute(data);
    //   setLoading(false)
    //   setModalIsActivedSuccess(!modalIsActivedSuccess)
    // } catch (err) {
    //   console.log(err);
    //   setLoading(false)
    //   setModalIsActivedError(!modalIsActivedError)
    // }
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

      <DivRow>



        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>

          <Subtitle>Pontos de parada</Subtitle>

          <FormColums>
            <TeoField.Select name='saida' label='Saída' onChange={handlePointlist} register={methods.register}>
            <option value='0'>default</option>
              {
                pointLoaded.map(point => {
                  return (
                    <option key={point.id+'s'} value={point.id}>{point.name}</option>
                  )
                })
              }
            </TeoField.Select>

          </FormColums>

          <PointBox>

            <FormColums>
              <TeoField.Select name='parada1' label='Parada' onChange={handlePointlist} register={methods.register}>
              <option value='0'>default</option>
              {
                pointLoaded.map(point => {
                  return (
                    <option key={point.id+'p'} value={point.id}>{point.name}</option>
                  )
                })
              }
              </TeoField.Select>

            </FormColums>

            { adicionalPoint.map((point, index) => {
              return (
                <FormColums>
                  <TeoField.Select key={index} name={'parada'+(index + 2)} label='Parada' onChange={handlePointAdicionalList} register={methods.register}>
                  <option value='0'>default</option>
                  {
                    pointLoaded.map(point => {
                      return (
                       <option key={point.id} value={point.id}>{point.name}</option>
                      )
                    })
                  }
                  </TeoField.Select>
                  <button
                    className="w3-button w3-red w3-round w3-text-white w3-small"
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                    width: '2rem',
                    height: '3rem'
                  }}
                    onClick={() => {deletePoint(point.id)}}>
                    X
                  </button>
                </FormColums>
              )
            }) }

            <button
              className="w3-button w3-teal w3-round"
              style={{ width: "30%" }}
              onClick={() => addNewPoint()
              }>+ Inserir ponto de parada</button>

          </PointBox>

          <FormColums>
            <TeoField.Select name='chegada' label='Chegada' onChange={handlePointlist} register={methods.register}>
            <option value='0'>default</option>
              {
                pointLoaded.map(point => {
                  return (
                    <option key={point.id} value={point.id}>{point.name}</option>
                  )
                })
              }
            </TeoField.Select>
          </FormColums>


        </div>
        <div>
        <Subtitle>Cadastrar ponto de parada</Subtitle>
          <TeoPointForm />
        </div>

      </DivRow>

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
          }>Cadastrar rota</button>

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
