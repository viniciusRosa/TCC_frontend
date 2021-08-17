import React from 'react';
import { Item, Left, Right, DivColumn, ContentLink } from './styles';

const HeaderList = ({arrayFields}) => {

  return (

    <Item>

      { arrayFields.map(item => {
        return (
          <DivColumn key={item}>
            <ContentLink>{item}</ContentLink>
          </DivColumn>
        )
      }) }

    </Item>

  )
}

export default HeaderList;
