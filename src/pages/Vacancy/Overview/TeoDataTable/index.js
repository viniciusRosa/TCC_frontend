import React, { useEffect, useState } from 'react';
import {
  ViewTable,
  TableHead,
  TableRow,
  DivHead,
  ButtonDiv,
  DivMessage,
  DivMessages,
  TextMessage,
  DivMessageStudent,
  DivstudentData,
  DivData
} from './styles'
import { useVacancy } from '../../../../contexts/VacancyContext';
import { useRoute } from '../../../../contexts/RouteContext';
import TeoModal from '../../../../components/TeoModal';
import { useHistory, useLocation } from 'react-router-dom';
import urlimage from '../../../../services/urlImage';


const TeoDataTable = () => {

  const { state } = useLocation();
  const history = useHistory()

  const [modalIsActived, setModalIsActived] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);
  const [overviewItem, setOverviewItem] = useState({})
  const [MessagesUpdate, setMessagesUpdate] = useState(false);
  const [messages, setMessages] = useState([]);
  const [acceptedOrRejectedModal, setAcceptedOrRejectedModal] = useState(false);
  const [operation, setOperation] = useState('')
  const [status, setStatus] = useState('');
  const [ route, setRoute ] = useState({});

  const user = '31cfc616-530d-4621-bdb7-d61b626baab6';

  const {
    loadOverview,
    loadMessages,
    sendMessage,
    message,
    changeStudentStatus
  } = useVacancy()

  const { loadRoute } = useRoute();

  useEffect(() => {
    async function getStudent() {
      const student = await loadOverview(state.student);
      setOverviewItem(student)
    }
    async function getRoute() {
      const response = await loadRoute(state.route)
      setRoute(response)
    }
    getStudent()
    getRoute()
  }, [])
console.log(route)

  useEffect(() => {
    async function getMessages() {
      const messages = await loadMessages(state.vacancyrequest)
      setMessages(messages)
    }
    getMessages();
    setMessagesUpdate(false)
  }, [MessagesUpdate])

  useEffect(() => {
    setStatus(state.status);
  }, [])

  function handleMessage() {
    setModalIsActived(true);
  }

  async function handleSendMessage() {
    setModalIsActived(false);
    setLoading(true);
    console.log(message)
    try {
      await sendMessage(state.vacancyrequest, user, state.student, message);
      setLoading(false);
      setModalIsActivedSuccess(!modalIsActivedSuccess)
      setMessagesUpdate(true)

    } catch (err) {
      console.log(err)
      setLoading(false);
      setModalIsActivedError(!modalIsActivedError)

    }
  }

  function activeModalSuccess() {
    setModalIsActivedSuccess(!modalIsActivedSuccess)
  }

  function activeModalError() {
    setModalIsActivedError(!modalIsActivedError)
  }

  function resetButtonSuccess() {
    setModalIsActivedSuccess(!modalIsActivedSuccess)
  }

  function resetButtonError() {
    setModalIsActivedError(!modalIsActivedError)
  }

  function handleAcceptedOrRejectButtons(operationName) {
    setOperation(operationName)
    setAcceptedOrRejectedModal(true)
  }

  function requestAcceptedOrRejected(operation) {
    try{
      changeStudentStatus( state.vacancyrequest, operation, state.route, state.student);
      console.log(operation)
      setAcceptedOrRejectedModal(false);
      alert('Operação realizada com sucesso.')
      history.push('/solicitacoespendentes')

    } catch(err) {

    }
  }

  return (
    <>
      <div>
        <DivHead>
          <div>
            <img src={`${urlimage.baseURL}${overviewItem.filename}`} alt='foto do aluno' />
            <p>{overviewItem.name}</p>
          </div>
        </DivHead>
        <ViewTable>
          <TableHead >
            <th></th>
          </TableHead>
          <tbody>
            <TableRow>
              <td>Rota escolhida</td>
              <td>{route.name}</td>
            </TableRow>
            <TableRow>
              <td>RG</td>
              <td>{overviewItem.rg}</td>
            </TableRow>
            <TableRow>
              <td>CPF</td>
              <td>{overviewItem.cpf}</td>
            </TableRow>
            <TableRow>
              <td>Email</td>
              <td>{overviewItem.email}</td>
            </TableRow>
            <TableRow>
              <td>Data de nascimento</td>
              <td>{overviewItem.borndate}</td>
            </TableRow>
            <TableRow>
              <td>Endereço</td>
              <td>{overviewItem.address}</td>
            </TableRow>
            <TableRow>
              <td>Numero</td>
              <td>{overviewItem.number}</td>
            </TableRow>
            <TableRow>
              <td>Complemento</td>
              <td>{overviewItem.complement}</td>
            </TableRow>
            <TableRow>
              <td>Cidade</td>
              <td>{overviewItem.city}</td>
            </TableRow>
            <TableRow>
              <td>Estado</td>
              <td>{overviewItem.uf}</td>
            </TableRow>
            <TableRow>
              <td>Escola</td>
              <td>{overviewItem.school}</td>
            </TableRow>
            <TableRow>
              <td>Turno</td>
              <td>{overviewItem.shift}</td>
            </TableRow>
          </tbody>
        </ViewTable>
      </div>

      <DivMessages>

        {

          messages.map((message, index) => {

            if (message.from_id === state.student) {
              return (
                <DivstudentData>
                  <span>{overviewItem.name}</span>
                  <DivMessageStudent>
                    <TextMessage>{message.message}</TextMessage>
                  </DivMessageStudent>
                </DivstudentData>
              )

            } else {
              return (
                <DivData>
                  <span>Usuário</span>
                  <DivMessage>
                    <TextMessage>{message.message}</TextMessage>
                  </DivMessage>
                </DivData>

              )
            }
          })
        }
      </DivMessages>

      {status === 'in_progress' &&

        <ButtonDiv>

          <button
            className="w3-button w3-teal w3-round"
            style={{ width: '30%' }}
            type='submit'
            onClick={() => { handleAcceptedOrRejectButtons('accepted') }}
          >
            Deferido
          </button>

          <button
            className="w3-button w3-orange w3-round w3-text-white"
            style={{ width: '30%' }}
            onClick={() => { handleMessage() }}>
            Entrar em contato
          </button>

          <button
            className="w3-button w3-red w3-round w3-text-white"
            style={{ width: '30%' }}
            onClick={() => { handleAcceptedOrRejectButtons('rejected') }}
          >
            Indeferido
          </button>

        </ButtonDiv>

      }

      {modalIsActived && <TeoModal.SendMessage
        closeModal={() => { setModalIsActived(!modalIsActived) }}
        secondary={() => { setModalIsActived(!modalIsActived) }}
        action={() => handleSendMessage()}
      />}
      {loading && <TeoModal.Loading />}
      {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Mensagem enviada com sucesso'} button={resetButtonSuccess} />}
      {modalIsActivedError && <TeoModal.Success closeModal={activeModalError} text={'Algo deu Errado'} button={resetButtonError} />}
      {acceptedOrRejectedModal && <TeoModal.Warning
        closeModal={() => { setAcceptedOrRejectedModal(!acceptedOrRejectedModal) }}
        action={() => { requestAcceptedOrRejected(operation) }}
        secondary={() => { setAcceptedOrRejectedModal(!acceptedOrRejectedModal) }}
      >Tem certeza?</TeoModal.Warning>}

    </>

  )
}

export default TeoDataTable;
