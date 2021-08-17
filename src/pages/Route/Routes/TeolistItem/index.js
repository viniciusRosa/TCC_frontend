import React from 'react';
import { Item, Left, Right, DivColumn, ContentLink } from './styles';
import urlimage from '../../../../services/urlImage';

import TeoButton from '../../../../components/TeoButton'



const TeoListItem = ({item, del, update, overview}) => {

  return (
    <Item>
      <DivColumn >
        <ContentLink onClick={overview} >{item.name}</ContentLink>
      </DivColumn>

      <DivColumn>
      <ContentLink onClick={overview}>23/{item.vacancy}</ContentLink>
      </DivColumn>

      <DivColumn>
      <ContentLink onClick={overview}>{item.shift}</ContentLink>
      </DivColumn>

      <Left>
        <TeoButton secondary size='100px' onClick={update}>Editar</TeoButton>
        <TeoButton warning size='100px' onClick={del}>Deletar</TeoButton>
      </Left>

    </Item>

  )
}

export default TeoListItem;
