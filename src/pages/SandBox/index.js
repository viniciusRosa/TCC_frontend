import React, {useState} from 'react';
import styled from 'styled-components';
import TeoUserForm from '../../components/TeoUserForm'
import TeoBox from '../../components/TeoBox'
import TeoModal from '../../components/TeoModal'
import TeoButton from '../../components/TeoButton'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


function SandBox() {
  const [isActived, setIsActived] = useState(false)

  function activeModal() {
    console.log('dsd')
    setIsActived(!isActived)
  }

  const text = `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado`;
  // const text = `Lorem Ipsum`
  return (
    <>
      <Container>
        <TeoButton onClick={activeModal}>Modal</TeoButton>
        {/* {isActived && <TeoModal.Warning activeModal={activeModal}>{text}</TeoModal.Warning>} */}
        {isActived && <TeoModal.Success closeModal={activeModal} text={'Testando texto'} />}

        <TeoBox>
          <TeoUserForm />
        </TeoBox>
      </Container>
    </>

  );
}

export default SandBox;
