import React from 'react';
import ReactDOM from 'react-dom';
import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoPageTitle from '../../../components/TeoPageTitle'
import TeoBox from '../../../components/TeoBox';
import TeoDataTable from './TeoDataTable'

function Schools() {


  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Visão Geral" />

          <TeoBox>
            <TeoDataTable />
          </TeoBox>

          <TeoBox>
            <p>sdfs</p>
          </TeoBox>

        </TeoMainWrapper>
       </TeoContainer>

    </>
  );
}

export default Schools;
