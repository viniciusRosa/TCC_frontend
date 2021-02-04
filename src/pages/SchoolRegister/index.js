import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TeoContainer from '../../components/TeoContainer';
import TeoNav from '../../components/TeoNav';
import TeoMainWrapper from '../../components/TeoMainWrapper';
import TeoNavTop from '../../components/TeoNavTop';
import TeoBox from '../../components/TeoBox';
import TeoUserForm from '../../components/TeoUserForm';
import TeoPageTitle from '../../components/TeoPageTitle';

function SchoolRegister() {

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="cadastrar Escola" />
          <TeoBox>
            <TeoUserForm />
          </TeoBox>
        </TeoMainWrapper>
       </TeoContainer>
    </>
  );
}

export default SchoolRegister;

