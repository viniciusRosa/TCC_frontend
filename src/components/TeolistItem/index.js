import React from 'react';
import { Item, Left, Right, ImgThumb } from './styles';
import urlimage from '../../services/urlImage';
import Content from '../TeoField/Content'

import TeoButton from '../TeoButton'



const TeoListItem = ({item, del, update}) => {

  return (
    <Item>
      <Right >
        <ImgThumb src={`${urlimage.baseURL}${item.filename}`} />
        <Content>{item.school_name}</Content>
      </Right>

      <Left>
        <TeoButton secondary size='100px' onClick={update}>Editar</TeoButton>
        <TeoButton warning size='100px' onClick={del}>Deletar</TeoButton>
      </Left>

    </Item>

  )
}

export default TeoListItem;
