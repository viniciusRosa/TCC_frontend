import React from 'react';
import { Item, Left, Right, ImgThumb, ContentLink } from './styles';
import urlimage from '../../../../services/urlImage';

import TeoButton from '../../../../components/TeoButton'



const TeoListItem = ({item, del, update, overview}) => {

  return (
    <Item>
      <Right >
        <ImgThumb src={item.image} />
        <ContentLink onClick={overview} >{item.name} </ContentLink>
        <ContentLink onClick={overview} style={{
          marginLeft: '100px'
        }}>{item.school_name}</ContentLink>
        <ContentLink onClick={overview} style={{
          marginLeft: '100px'
        }}>{item.shift}</ContentLink>

      </Right>

      <Left>
      <ContentLink onClick={overview}> {item.city} - {item.uf} </ContentLink>

      </Left>

    </Item>

  )
}

export default TeoListItem;
