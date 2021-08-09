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
import TeoListItem from './TeolistItem';
import TeoModal from '../../../components/TeoModal';
import Content from '../../../components/TeoField/Content'
import TeoButton from '../../../components/TeoButton';
import { DivCreateNew } from './styles';

function Routes() {

  const [items, setItem] = useState([]);
  const [update, setUpdate] = useState(false);
  const [modalIsActived, setModalIsActived] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);
  const history = useHistory();

  useEffect(() => {

    if(update === true) {
      setUpdate(false);
    }

    api.get('points').then(response => {
      setItem(response.data)
     })
  }, [update])

  function confirmDelete(id) {
    setItemToDelete(id)
    setModalIsActived(true);
  }

  async function deleteItem(id) {
    await api.delete(`points/${id}`);
    setModalIsActived(!modalIsActived);
    setUpdate(true);
  }

  function createNew() {
    history.push({
      pathname: '/points/create',
    })
  }

  async function UpdateItem(id) {
    const { data } = await api.get(`points/${id}`)

    history.push({
      pathname: '/points/update',
      state: {
        item: data[0],
      }
    })
  }

  function goOverview(id) {
    history.push({
      pathname: '/points/overview',
      state: {
        item: id,
      }
    })
  }

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Pontos de parada" />
          <TeoBox>
            <DivCreateNew>
              <TeoButton primary size='50%' onClick={createNew}>Cadastrar nova rota</TeoButton>
            </DivCreateNew>
            { items <= 0 ? <Content>'Nenhuma rota cadastrado</Content> :
              items.map(item => {
                return (
                  <TeoListItem key={item.id}
                      item={item}
                      overview={() => {goOverview(item.id)}}
                      update={() => {UpdateItem(item.id)}}
                      del={() => {confirmDelete(item.id)}}/>
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

export default Routes;
