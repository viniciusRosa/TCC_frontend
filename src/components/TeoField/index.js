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

const Select = ({register, ...props}) => {
  return (
    <FieldStyle>
      <Label>
        <Content>{props.label}</Content>
        <select name={props.name}  ref={register}>
          <option value='0'>{props.defaultOption}</option>
          {props.children}
        </select>
      </Label>
    </FieldStyle>
  )

}

export default {
  Text,
  Select,
};
