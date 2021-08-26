import React from 'react';
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
