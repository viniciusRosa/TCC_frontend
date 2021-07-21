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
import TeoButton from '../../../../components/TeoButton';
import TeoModal from '../../../../components/TeoModal';
import { useLocation } from 'react-router-dom';
import urlimage from '../../../../services/urlImage';


const TeoDataTable = () => {

  const { state } = useLocation();

  const [modalIsActived, setModalIsActived] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIsActivedSuccess, setModalIsActivedSuccess] = useState(false);
  const [modalIsActivedError, setModalIsActivedError] = useState(false);

  const [overviewItem, setOverviewItem] = useState({})


  const {
    loadOverview,

    messages,
    MessagesUpdate,
    sendMessage,
    getMessages,
    setMessagesUpdate
  } = useVacancy()

  useEffect(() => {
    async function getStudent() {
      const student = await loadOverview(state.student);
      setOverviewItem(student)
    }
    getStudent()
  }, [])

  useEffect(() => {
    getMessages()
    setMessagesUpdate(false)
  }, [MessagesUpdate])


  function handleMessage() {
    setModalIsActived(true);
  }

  async function handleSendMessage() {
    setModalIsActived(false);
    setLoading(true);
    try{
      await sendMessage();
      setLoading(false);
      setModalIsActivedSuccess(!modalIsActivedSuccess)
      setMessagesUpdate(true)

    } catch(err) {
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

  return (
    <>
      <div>
        <DivHead>
          <div>
            <img src={`${urlimage.baseURL}${overviewItem.filename}`} alt='foto do aluno'/>
            <p>{overviewItem.name}</p>
          </div>
        </DivHead>
        <ViewTable>
          <TableHead >
            <th></th>
          </TableHead>
          <tbody>
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

          if (message.from_id === overviewItem.user_id) {
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

      <ButtonDiv>

        <TeoButton primary size='50%' >Deferido</TeoButton>
        <TeoButton secondary size='50%' onClick={() => {handleMessage()} }>Entrar em contato</TeoButton>
        <TeoButton warning size='50%' >Indeferido</TeoButton>

      </ButtonDiv>



      {modalIsActived && <TeoModal.SendMessage
          closeModal={() => {setModalIsActived(!modalIsActived)}}
          secondary={() => {setModalIsActived(!modalIsActived)}}
          action={() => handleSendMessage()}
           />}
      {loading && <TeoModal.Loading />}
      {modalIsActivedSuccess && <TeoModal.Success closeModal={activeModalSuccess} text={'Mensagem enviada com sucesso'} button={resetButtonSuccess} />}
      {modalIsActivedError && <TeoModal.Success closeModal={activeModalError} text={'Algo deu Errado'} button={resetButtonError} />}

    </>

  )
}

export default TeoDataTable;
