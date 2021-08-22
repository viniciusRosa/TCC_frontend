import React from 'react';
import { Item, Left, Right, ImgThumb, ContentLink } from './styles';


import TeoButton from '../../../../components/TeoButton';



const TeoListItem = ({item, del, update, overview}) => {

  return (
    <Item>
      <Right >
        <ContentLink onClick={overview} >{item.name}</ContentLink>
      </Right>

      <Left>
        <TeoButton secondary size='100px' onClick={update}>Editar</TeoButton>
        <TeoButton warning size='100px' onClick={del}>Deletar</TeoButton>
      </Left>

    </Item>

  )
}

export default TeoListItem;
