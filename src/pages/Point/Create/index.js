import React from 'react';
import ReactDOM from 'react-dom';

import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoBox from '../../../components/TeoBox';
import TeoWrapperForm from './TeoWrapperForm';
import TeoPageTitle from '../../../components/TeoPageTitle';

function Create() {

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Cadastrar ponto de parada" />
          <TeoBox>
            <TeoWrapperForm />
          </TeoBox>
        </TeoMainWrapper>
       </TeoContainer>
    </>
  );
}

export default Create;

