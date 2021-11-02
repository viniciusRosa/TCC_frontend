import React from 'react';
import { Container, DivRow } from './style';

const Card = ({name, number}) => {


  return (
    <Container>
      <DivRow>
        <p>{ name }</p>
        <p>{ number }</p>
      </DivRow>
    </Container>
  )
}

export default Card;

