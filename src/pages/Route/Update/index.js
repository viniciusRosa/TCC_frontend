import React from 'react';
import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoBox from '../../../components/TeoBox';
import TeoWrapperForm from './TeoWrapperForm';
import TeoPageTitle from '../../../components/TeoPageTitle';

function Update() {

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Atualizar cadastro da rota" />
          <TeoBox>
            <TeoWrapperForm />
          </TeoBox>
        </TeoMainWrapper>
       </TeoContainer>
    </>
  );
}

export default Update;

