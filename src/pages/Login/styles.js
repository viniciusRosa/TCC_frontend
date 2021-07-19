import styled from 'styled-components';

export const TEOLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 `;

 export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  min-width: 300px;
 `;

 export const FormWrapper = styled.div`
  border: 1px solid red;
  width: 100%;

 `;

 export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black
  width: 100%;
  
 `;

 export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  border: 1px solid yellow
  width: 100%;

 `; 


 export const Input = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  height: 24px;
 `;