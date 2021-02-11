import styled from 'styled-components'

export const FieldStyle = styled.div`
  /* width: 100%; */
  width: ${props => props.size ? props.size: '100%'}
`;
