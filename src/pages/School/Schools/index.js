import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom';
import api from '../../../services/api';
import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoPageTitle from '../../../components/TeoPageTitle'
import TeoBox from '../../../components/TeoBox';
import TeoListItem from '../../../components/TeolistItem';
import TeoModal from '../../../components/TeoModal';
import Content from '../../../components/TeoField/Content'
import TeoButton from '../../../components/TeoButton';
import { DivCreateNew } from './styles';

function Schools() {

  const [schoolsDb, setSchools] = useState([]);
  const [update, setUpdate] = useState(false);
  const [modalIsActived, setModalIsActived] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);
  const history = useHistory();

  useEffect(() => {

    if(update === true) {
      setUpdate(false);
    }

    api.get('schools').then(response => {
      setSchools(response.data)
     })
  }, [update])

  function confirmDelete(id) {
    setItemToDelete(id)
    setModalIsActived(true);
  }

  async function deleteItem(id) {
    await api.delete(`schools/${id}`);
    setModalIsActived(!modalIsActived);
    setUpdate(true);
  }

  function createNewSchool() {
    history.push({
      pathname: '/schools/create',
    })
  }

  async function UpdateSchool(id) {
    const { data } = await api.get(`schools/${id}`)

    history.push({
      pathname: '/schools/update',
      state: {
        school: data[0],
      }
    })
  }

  function goOverview(id) {
    history.push({
      pathname: '/schools/overview',
      state: {
        school: id,
      }
    })
  }

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Escolas" />
          <TeoBox>
            <DivCreateNew>
              <TeoButton primary size='50%' onClick={createNewSchool}>Cadastrar nova Escola</TeoButton>
            </DivCreateNew>
            { schoolsDb <= 0 ? <Content>'Nenhuma escola cadastrada</Content> :
              schoolsDb.map(school => {
                return (
                  <TeoListItem key={school.id}
                      item={school}
                      overview={() => {goOverview(school.id)}}
                      update={() => {UpdateSchool(school.id)}}
                      del={() => {confirmDelete(school.id)}}/>
                )
              })}
          </TeoBox>
        </TeoMainWrapper>
       </TeoContainer>
        {modalIsActived && <TeoModal.Warning
          closeModal={() => {setModalIsActived(!modalIsActived)}}
          action={() => {deleteItem(itemToDelete)}}
          secondary={() => {setModalIsActived(!modalIsActived)}}>Tem Certeza?</TeoModal.Warning>}
    </>
  );
}

export default Schools;
