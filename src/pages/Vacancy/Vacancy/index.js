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

  const {
    resultDb,
    setUpdate
  } = useVacancy()

  useEffect(() => {

    setUpdate(true)

  }, [])

  const history = useHistory();

  async function goOverview(id) {
    history.push({
      pathname: '/vacancy/overview',
      state: {
        student: id
      }
    })
  }

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Solicitações pendentes" />
          <TeoBox>

            {resultDb <= 0 ? <Content>Nenhuma solicitação pendente</Content> :
              resultDb.map((item) => {

                return (
                  <TeoListItem key={item.id}
                    item={item}
                    overview={() => { goOverview(item.id) }}
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
