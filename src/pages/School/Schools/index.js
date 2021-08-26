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
import { useSchool } from '../../../contexts/SchoolContext';
import HeaderList from '../../../components/HeaderList'


function Schools() {

  const [schoolsDb, setSchools] = useState([]);
  const [update, setUpdate] = useState(false);
  const [modalIsActived, setModalIsActived] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);
  const history = useHistory();

  const {
    loadSchoolList,
    deleteSchool,
    loadSchool
  } = useSchool();

  useEffect(() => {
    async function getSchools() {
      const schools = await loadSchoolList();
      setSchools(schools);
    }

    getSchools()

    if(update === true) {
      setUpdate(false)
    }

  }, [update, loadSchoolList])

  function confirmDelete(id) {
    setItemToDelete(id)
    setModalIsActived(true);
  }

  async function deleteItem(id) {
    try {
      await deleteSchool(id);
      setModalIsActived(!modalIsActived);
      setUpdate(true);
    } catch(err) {
      console.log(err)
    }
  }

  function createNewSchool() {
    history.push({
      pathname: '/schools/create',
    })
  }

  async function UpdateSchool(id) {
    const school = await loadSchool(id)

    history.push({
      pathname: '/schools/update',
      state: {
        school: school,
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
              <button className="w3-button w3-teal w3-round" onClick={createNewSchool}>+ Nova escola</button>
            </DivCreateNew>
            <HeaderList arrayFields={['Nome', '', '', '', 'Opções']} />
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
