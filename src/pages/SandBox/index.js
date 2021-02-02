import React from 'react';
import styled from 'styled-components';
import TeoUserForm from '../../components/TeoUserForm'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


function SandBox() {

  return (
    <>
      <Container>
        <TeoUserForm />
      </Container>
    </>

  );
}

export default SandBox;
