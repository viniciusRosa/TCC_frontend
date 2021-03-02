import React from 'react';
import { Item, Left, Right, ImgThumb, ContentLink } from './styles';
import urlimage from '../../services/urlImage';
import Content from '../TeoField/Content';
import { Link } from 'react-router-dom';

import TeoButton from '../TeoButton'



const TeoListItem = ({item, del, update, overview}) => {

  return (
    <Item>
      <Right >
        <ImgThumb src={`${urlimage.baseURL}${item.filename}`} />
        <ContentLink onClick={overview} >{item.school_name}</ContentLink>
      </Right>

      <Left>
        <TeoButton secondary size='100px' onClick={update}>Editar</TeoButton>
        <TeoButton warning size='100px' onClick={del}>Deletar</TeoButton>
      </Left>

    </Item>

  )
}

export default TeoListItem;
