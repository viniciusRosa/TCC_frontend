import React from 'react';
import { Item, Left, DivColumn, ContentLink } from './styles';

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
      <button className="w3-button w3-round w3-dark-grey" onClick={update}>Editar</button>
      <button className="w3-button w3-round w3-red" style={{ marginLeft: '1rem' }} onClick={del}>Deletar</button>
      </Left>

    </Item>

  )
}

export default TeoListItem;
