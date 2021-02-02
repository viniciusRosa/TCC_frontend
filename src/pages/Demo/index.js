import React from 'react';
import TeoContainer from '../../components/TeoContainer';
import TeoNav from '../../components/TeoNav';
import TeoMainWrapper from '../../components/TeoMainWrapper'
import TeoNavTop from '../../components/TeoNavTop'

function Demo() {

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
        </TeoMainWrapper>
       </TeoContainer>
    </>

  );
}

export default Demo;
