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
import { usePoint } from '../../../contexts/PointContext';
import HeaderList from '../../../components/HeaderList'

function Points() {

  const [items, setItem] = useState([]);
  const [update, setUpdate] = useState(false);
  const [modalIsActived, setModalIsActived] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);
  const history = useHistory();

  const {
    loadPointList
   } = usePoint();

  useEffect(() => {

    async function getPoints() {
      const points = await loadPointList();
      setItem(points)
    }

    getPoints()

    // if(update === true) {
    //   setUpdate(false);
    // }

  }, [])

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
              <TeoButton primary size='50%' onClick={createNew}>Cadastrar novo ponto de parada</TeoButton>
            </DivCreateNew>
            <HeaderList  arrayFields={['Nome',  'Opções']} />
            { items <= 0 ? <Content>'Nenhum ponto cadastrado</Content> :
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

export default Points;
