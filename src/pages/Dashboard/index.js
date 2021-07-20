import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom';
import TeoContainer from '../../components/TeoContainer';
import TeoNav from '../../components/TeoNav';
import TeoMainWrapper from '../../components/TeoMainWrapper';
import TeoNavTop from '../../components/TeoNavTop';
import TeoPageTitle from '../../components/TeoPageTitle'


function Dashboard() {


  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Dashboard" />

        </TeoMainWrapper>
       </TeoContainer>

    </>
  );
}

export default Dashboard;
