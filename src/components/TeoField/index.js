import React, { useCallback } from 'react';
import Label from './Label';
import Input from './Input';
import { FieldStyle } from './styles';
import Content from './Content';
import StyledSelect from './Select';
import StyledTextArea from './TextArea'

import { cep, phone, number } from './masks';


const Text = ({ label, type, name, register, size = null, mask, placeholder, initialValue = null }) => {

  const handleKeyUp = useCallback((e) => {
    if (mask === 'cep') {
      cep(e);
    }
    if (mask === 'phone') {
      phone(e)
    }
    if (mask === 'number') {
      number(e)
    }
  }, [mask])

  return (
    <FieldStyle size={size}>
      <Label>
        <Content>{label}</Content>
        <Input type={type} placeholder={placeholder} value={initialValue} name={name} ref={register} onKeyUp={handleKeyUp} />
      </Label>
    </FieldStyle>
  )
}

const Select = ({ register, size = null, ...props }) => {
  return (
    <FieldStyle size={size}>
      <Label>
        <Content>{props.label}</Content>
        <StyledSelect name={props.name} ref={register} onChange={props.onChange}>
          <option value='0'>{props.defaultOption}</option>
          {props.children}
        </StyledSelect>
      </Label>
    </FieldStyle>
  )
}

const TextArea = ({ register, placeholder, ...props }) => {
  return (

    <StyledTextArea
      name={props.name}
      ref={register}
      placeholder={placeholder}
      onChange={props.onChange}
      {...props}
    />

  )
}

export default {
  Text,
  Select,
  TextArea,
};
