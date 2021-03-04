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

function Vehicles() {

  const [resultDb, setResult] = useState([]);
  const [update, setUpdate] = useState(false);
  const [modalIsActived, setModalIsActived] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);
  const history = useHistory();

  useEffect(() => {

    if(update === true) {
      setUpdate(false);
    }

    api.get('vehicles').then(response => {
      setResult(response.data)
     })
  }, [update])

  function confirmDelete(id) {
    setItemToDelete(id)
    setModalIsActived(true);
  }

  async function deleteItem(id) {
    await api.delete(`vehicles/${id}`);
    setModalIsActived(!modalIsActived);
    setUpdate(true);
  }

  async function UpdateSchool(id) {
    const { data } = await api.get(`vehicles/${id}`)

    history.push({
      pathname: '/vehicles/update',
      state: {
        result: data[0],
      }
    })
  }

  function goOverview(id) {
    history.push({
      pathname: '/vehicles/overview',
      state: {
        result: id,
      }
    })
  }

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Veículos" />
          <TeoBox>
            { resultDb <= 0 ? <Content>'Nenhum veículo cadastrada</Content> :
              resultDb.map(item => {
                return (
                  <TeoListItem key={item.id}
                      item={item}
                      overview={() => {goOverview(item.id)}}
                      update={() => {UpdateSchool(item.id)}}
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

export default Vehicles;
