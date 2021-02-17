import React from 'react';
import ReactDOM from 'react-dom';

import TeoContainer from '../../../components/TeoContainer';
import TeoNav from '../../../components/TeoNav';
import TeoMainWrapper from '../../../components/TeoMainWrapper';
import TeoNavTop from '../../../components/TeoNavTop';
import TeoPageTitle from '../../../components/TeoPageTitle'
import TeoBox from '../../../components/TeoBox';
import TeoListItem from '../../../components/TeolistItem';
import TeoDropzone from '../../../components/TeoDropzone';

function Schools() {

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Escolas" />
          <TeoBox>
          <TeoDropzone  name='image' text='Click aqui para inserir uma foto ou arraste' label='Foto da escola(Opcional)'  />

            <TeoListItem />
          </TeoBox>
        </TeoMainWrapper>
       </TeoContainer>
    </>
  );
}

export default Schools;
