import React, {useState} from 'react';
import styled from 'styled-components';
import TeoContainer from '../../components/TeoContainer'
import TeoNav from '../../components/TeoNav'
import TeoModal from '../../components/TeoModal'

function SandBox() {

  const [loading, setLoading] = useState(true)

  return (
    <>
      <TeoContainer>
      <TeoNav />

       </TeoContainer>
       {loading && <TeoModal.Loading />}

    </>
  );
}

export default SandBox;
