import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom';
import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoPageTitle from '../../../components/TeoPageTitle'
import TeoBox from '../../../components/TeoBox';
import TeoListItem from './TeolistItem';
import Content from '../../../components/TeoField/Content'
import { useVacancy } from '../../../contexts/VacancyContext';

function Vacancy() {

  const [resultDb, setResult] = useState([]);

  const {
    loadVacancyList
  } = useVacancy()

  useEffect(() => {

    async function getVacancy() {
      const vacancy = await loadVacancyList('rejected');
      setResult(vacancy);
    }
    getVacancy()

  }, [loadVacancyList])

  console.log(resultDb)

  const history = useHistory();

  async function goOverview(studentId, vacancyrequestId) {
    history.push({
      pathname: '/vacancy/overview',
      state: {
        student: studentId,
        vacancyrequest: vacancyrequestId
      }
    })
  }

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Solicitações Indeferidas" />
          <TeoBox>

            {resultDb <= 0 ? <Content>Nenhuma solicitação indeferida</Content> :
              resultDb.map((item) => {

                return (
                  <TeoListItem key={item.id}
                    item={item}
                    overview={() => { goOverview(item.id, item.vacancyrequest) }}
                  />
                )
              })}
          </TeoBox>
        </TeoMainWrapper>
      </TeoContainer>
    </>
  );
}

export default Vacancy;
