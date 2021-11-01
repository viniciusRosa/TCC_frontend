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
import { useUser } from '../../../contexts/UserContext';
import HeaderList from '../../../components/HeaderList'

function Users() {

  const [items, setItem] = useState([]);
  const [update, setUpdate] = useState(false);
  const [modalIsActived, setModalIsActived] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);
  const history = useHistory();

  const {
    loadUsersList
   } = useUser();

  useEffect(() => {

    async function getUsers() {
      const users = await loadUsersList();
      setItem(users)
    }

    getUsers()

    if(update === true) {
      setUpdate(false);
    }

  }, [update, loadUsersList])

  function confirmDelete(id) {
    setItemToDelete(id)
    setModalIsActived(true);
  }

  async function deleteItem(id) {
    try {
      // await deletePoint(id);
      setModalIsActived(!modalIsActived);
      setUpdate(true);
    } catch(err) {
      console.log(err);
    }
  }

  function createNew() {
    history.push({
      pathname: '/usuarios/create',
    })
  }

  async function UpdateItem(id) {
    // const user = await loadPoint(id)

    history.push({
      pathname: '/usuarios/update',
      state: {
        // point: user,
      }
    })
  }

  function goOverview(id) {
    history.push({
      pathname: '/usuarios/overview',
      state: {
        user: id,
      }
    })
  }

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Usuários" />
          <TeoBox>
            <DivCreateNew>
              <button className="w3-button w3-teal w3-round" onClick={createNew}>+ Novo usuário</button>
            </DivCreateNew>
            <HeaderList  arrayFields={['Nome','Status', '', 'Opções']} />
            { items <= 0 ? <Content>'Nenhum usuario cadastrado</Content> :
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

export default Users;
