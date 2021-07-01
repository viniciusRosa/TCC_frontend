import React from 'react';
import {
  Item,
  ImgThumb,
  ContentLink,
  ListTable,
  ListTr,
  ListTd
} from './styles';

const TeoListItem = ({item, del, update, overview}) => {

  return (
    <Item>
      <ListTable>
        <ListTr>
          <ListTd>
            <ImgThumb src={item.image} />
            <ContentLink onClick={overview}> {item.name} </ContentLink>
          </ListTd>

          <ListTd>
            <ContentLink onClick={overview}> {item.school_name} </ContentLink>
          </ListTd>

          <ListTd>
            <ContentLink onClick={overview}> {item.shift} </ContentLink>
          </ListTd>

          <ListTd>
            <ContentLink onClick={overview}> {item.city} - {item.uf} </ContentLink>
          </ListTd>

        </ListTr>
      </ListTable>
    </Item>
  )
}

export default TeoListItem;
