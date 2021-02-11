import React, { useCallback } from 'react';
import Label from './Label';
import Input from './Input';
import {FieldStyle} from './styles';
import Content from './Content';
import StyledSelect from './Select';

import { cep, phone } from './masks';


const Text = ({ label, type, name, register, size = null, mask, placeholder }) => {

  const handleKeyUp = useCallback((e) => {
    if (mask === 'cep') {
      cep(e);
    }
    if (mask === 'phone') {
      phone(e)
    }
  }, [mask])

  return (
    <FieldStyle size={size}>
      <Label>
        <Content>{label}</Content>
        <Input type={type} placeholder={placeholder} name={name} ref={register} onKeyUp={handleKeyUp} />
      </Label>
    </FieldStyle>
  )
}

const Select = ({register, size = null, ...props}) => {
  return (
    <FieldStyle size={size}>
      <Label>
        <Content>{props.label}</Content>
        <StyledSelect name={props.name}  ref={register} onChange={props.onChange}>
          <option value='0'>{props.defaultOption}</option>
          {props.children}
        </StyledSelect>
      </Label>
    </FieldStyle>
  )

}

export default {
  Text,
  Select,
};
