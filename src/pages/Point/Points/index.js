import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoPageTitle from '../../../components/TeoPageTitle'
import TeoBox from '../../../components/TeoBox';
import TeoListItem from './TeolistItem';
import TeoModal from '../../../components/TeoModal';
import Content from '../../../components/TeoField/Content'
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
    loadPointList,
    deletePoint,
    loadPoint
   } = usePoint();

  useEffect(() => {

    async function getPoints() {
      const points = await loadPointList();
      setItem(points)
    }

    getPoints()

    if(update === true) {
      setUpdate(false);
    }

  }, [update, loadPointList])

  function confirmDelete(id) {
    setItemToDelete(id)
    setModalIsActived(true);
  }

  async function deleteItem(id) {
    try {
      await deletePoint(id);
      setModalIsActived(!modalIsActived);
      setUpdate(true);
    } catch(err) {
      console.log(err);
    }
  }

  function createNew() {
    history.push({
      pathname: '/points/create',
    })
  }

  async function UpdateItem(id) {
    const point = await loadPoint(id)

    history.push({
      pathname: '/points/update',
      state: {
        item: point,
      }
    })
  }

  function goOverview(id) {
    history.push({
      pathname: '/points/overview',
      state: {
        point: id,
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
              <button className="w3-button w3-teal w3-round" onClick={createNew}>+ Novo ponto de parada</button>
            </DivCreateNew>
            <HeaderList  arrayFields={['Nome','', '', 'Opções']} />
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
