import React from 'react';
import { DivTitle, SpanTitle } from './styles';


const TeoPageTitle = ({title}) => {
  return (
    <DivTitle>
      <SpanTitle>{title}</SpanTitle>
    </DivTitle>
  )
}

export default TeoPageTitle;
