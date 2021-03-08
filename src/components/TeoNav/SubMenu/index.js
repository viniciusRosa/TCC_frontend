import React from 'react';
import { TeoMenuUl, TeoMenuLi } from '../styles';
import { Link } from 'react-router-dom'

const Submenu = ({ item }) => {
  return (
    <TeoMenuUl>
      {
        item.children.map((itemC) => {
          return (
            <TeoMenuLi> <Link to={itemC.path} >{itemC.title}</Link>  </TeoMenuLi>
          )
        })
      }
    </TeoMenuUl>
  )
}

export default Submenu;
