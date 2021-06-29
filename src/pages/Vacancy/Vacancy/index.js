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
import { useVacancy } from '../../../contexts/VacancyContext';


function Vacancy() {

  const {
    resultDb,
    setOverviewItem,
    overviewItem
  } = useVacancy()

  const history = useHistory();

  async function goOverview(id) {
     await setOverviewItem(id)
    history.push('/vacancy/overview')
  }

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Solicitações pendentes" />
          <TeoBox>
          
            { resultDb <= 0 ? <Content>Nenhuma solicitação pendente</Content> :
              resultDb.map(item => {
                return (
                  <TeoListItem key={item.id}
                      item={item}
                      overview={() => {goOverview(item)}}
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
