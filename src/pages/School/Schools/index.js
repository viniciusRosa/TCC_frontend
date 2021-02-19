import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import api from '../../../services/api';
import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoPageTitle from '../../../components/TeoPageTitle'
import TeoBox from '../../../components/TeoBox';
import TeoListItem from '../../../components/TeolistItem';

function Schools() {

  const [schoolsDb, setSchools] = useState([]);

  useEffect(() => {
    api.get('schools').then(response => {
      setSchools(response.data)
     })
  }, [])

  console.log(schoolsDb)


  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Escolas" />
          <TeoBox>
            {
              schoolsDb.map(school => {
                return (
                  <TeoListItem key={school.id} item={school}/>
                )
              })}

          </TeoBox>
        </TeoMainWrapper>
       </TeoContainer>
    </>
  );
}

export default Schools;
