import React from 'react';
import {
  Item,
  ImgThumb,
  ContentLink,
  ListTable,
  ListTr,
  ListTd
} from './styles';
import urlimage from '../../../../services/urlImage';

const TeoListItem = ({ item, overview }) => {

  return (
    <Item onClick={overview}>
      <ListTable>
        <tbody>
          <ListTr>
            <ListTd>
              <div>
                <ImgThumb src={`${urlimage.baseURL}${item.filename}`} />
                <ContentLink> {item.student} </ContentLink>
              </div>
            </ListTd>

            <ListTd>
              <ContentLink> {item.school} </ContentLink>
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
