import React from 'react';
import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoBox from '../../../components/TeoBox';
import TeoPointForm from './TeoPointForm';
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
            <TeoPointForm />
          </TeoBox>
        </TeoMainWrapper>
       </TeoContainer>
    </>
  );
}

export default Create;

