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
import { useRoute } from '../../../contexts/RouteContext';
import HeaderList from '../../../components/HeaderList'

function Routes() {

  const [items, setItem] = useState([]);
  const [update, setUpdate] = useState(false);
  const [modalIsActived, setModalIsActived] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);
  const history = useHistory();

  const {
    loadRouteList
  } = useRoute();

  useEffect(() => {
    async function getRoutes() {
      const routes = await loadRouteList();
      setItem(routes);
    }

    getRoutes()
  }, [])

  function confirmDelete(id) {
    setItemToDelete(id)
    setModalIsActived(true);
  }

  async function deleteItem(id) {
    // await api.delete(`points/${id}`);
    // setModalIsActived(!modalIsActived);
    // setUpdate(true);
  }

  function createNew() {
    // history.push({
    //   pathname: '/points/create',
    // })
  }

  async function UpdateItem(id) {
    // const { data } = await api.get(`points/${id}`)

    // history.push({
    //   pathname: '/points/update',
    //   state: {
    //     item: data[0],
    //   }
    // })
  }

  function goOverview(id) {
    history.push({
      pathname: '/route/overview',
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
          <TeoPageTitle title="Rotas" />
          <TeoBox>
            <DivCreateNew>
              <button className="w3-button w3-teal w3-round" onClick={createNew}>+ Nova rota</button>
            </DivCreateNew>
            <HeaderList  arrayFields={['Nome', 'Vagas', 'Turno', 'Opções']} />
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
