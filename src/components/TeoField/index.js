import React from 'react';
import Label from './Label';
import Input from './Input';
import {FieldStyle} from './styles';
import Content from './Content';


const Text = ({ label, type, name, register }) => {
  return (
    <FieldStyle>
      <Label>
        <Content>{label}</Content>
        <Input type={type} name={name} ref={register}/>
      </Label>
    </FieldStyle>
  )
}

export default {
  Text,
};
