import React from 'react';
import styled from 'styled-components';

const TeoMain = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;


const TeoMainWrapper = ({children}) => {

  return (
    <TeoMain>
      { children }
    </TeoMain>

  );
}

export default TeoMainWrapper;
