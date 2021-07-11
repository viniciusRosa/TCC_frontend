import React from 'react';
import {
  Item,
  ImgThumb,
  ContentLink,
  ListTable,
  ListTr,
  ListTd
} from './styles';

const TeoListItem = ({ item, overview }) => {

  return (
    <Item onClick={overview}>
      <ListTable>
        <tbody>
          <ListTr>
            <ListTd>
              <div>
                <ImgThumb src={item.image} />
                <ContentLink> {item.name} </ContentLink>
              </div>
            </ListTd>

            <ListTd>
              <ContentLink> {item.school_name} </ContentLink>
            </ListTd>

            <ListTd>
              <ContentLink> {item.shift} </ContentLink>
            </ListTd>

            <ListTd>
              <ContentLink> {item.city} - {item.uf} </ContentLink>
            </ListTd>

            <ListTd>
              <ContentLink> horario</ContentLink>
            </ListTd>


          </ListTr>
        </tbody>
      </ListTable>
    </Item>
  )
}

export default TeoListItem;
