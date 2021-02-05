import styled from 'styled-components';


import TeoField from '../TeoField';
import Label from '../TeoField/Label';


export const FormColums = styled.div `
  display: flex;
  justify-content: space-between;

  & > div:first-child {
    padding-right: 0.5rem;
  }

  & > div:not(:first-child) {
    padding-left: 0.5rem;
  }
`;



