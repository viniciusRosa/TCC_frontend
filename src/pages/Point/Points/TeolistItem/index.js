import React from 'react';
import { Item, Left, Right, ImgThumb, ContentLink } from './styles';

const TeoListItem = ({item, del, update, overview}) => {

  return (
    <Item>
      <Right >
        <ContentLink onClick={overview} >{item.name}</ContentLink>
      </Right>

      <Left>
        <button className="w3-button w3-round w3-dark-grey" onClick={update}>Editar</button>
        <button className="w3-button w3-round w3-red" style={{ marginLeft: '1rem' }} onClick={del}>Deletar</button>
      </Left>

    </Item>

  )
}

export default TeoListItem;
