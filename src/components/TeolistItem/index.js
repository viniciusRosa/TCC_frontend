import React, { useEffect, useState } from 'react';
import { Item, Left, Right } from './styles';
import urlimage from '../../services/urlImage';

import TeoButton from '../TeoButton'



const TeoListItem = ({item}) => {


  const [photo, setPhoto] = useState()

  return (
    <Item>
      <Right >
        <img src={`${urlimage.baseURL}${item.filename}`} />
        <p>nome</p>
      </Right>

      <Left>
        <TeoButton secondary size='100px'>Editar</TeoButton>
        <TeoButton warning size='100px'>Deletar</TeoButton>
      </Left>

    </Item>

  )
}

export default TeoListItem;
