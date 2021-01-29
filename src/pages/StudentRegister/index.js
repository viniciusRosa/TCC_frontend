import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../assets/logoBranco.png'
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const TEOContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
`;

const TEONav = styled.nav`
  background-color: black;
  position: relative;
  width: 268px;
  height: 1024px;
`;

const TEOMain = styled.div`
  display: flex;
  width: 100vw;
  background-color: red;

`;


function StudentRegister() {




  return (

    <TEOContainer>
      <TEONav>
        <h2>Nav</h2>
      </TEONav>
      <TEOMain>
      <h2>container</h2>

      </TEOMain>
    </TEOContainer>

  );
}

export default StudentRegister;
