import React from 'react';
import { Item, Left, Right, ImgThumb, ContentLink } from './styles';
import urlimage from '../../../../services/urlImage';

import TeoButton from '../../../../components/TeoButton'



const TeoListItem = ({item, del, update, overview}) => {

  return (
    <Item>
      <Right >
        <ImgThumb src='https://images.pexels.com/photos/2942172/pexels-photo-2942172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        <ContentLink onClick={overview} >{item.vehicle_name}</ContentLink>
      </Right>

      <Left>
        <TeoButton secondary size='100px' onClick={update}>Editar</TeoButton>
        <TeoButton warning size='100px' onClick={del}>Deletar</TeoButton>
      </Left>

    </Item>

  )
}

export default TeoListItem;
