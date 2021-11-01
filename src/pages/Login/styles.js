import styled from 'styled-components';
import logo from '../../assets/logoV2.png'


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
  box-shadow: 0.1rem 0.1rem 0.1rem var(--color-grey-medium );
 `;

 export const FormWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
 `;

 export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

 `;

 export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;

 `;


 export const Input = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  height: 24px;
 `;

export const TeoLogo = styled.img.attrs({
  src: logo,
  alt: 'Logo do Teo'
})`
  height: 88px;
  padding: 2rem, 0;
`;

export const ForgetPassaword = styled.p`

  display: flex;
  justify-content: center;
  margin: 1.1rem 0 0 0;

  & a {
    margin: 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    color: var(--color-grey-dark);
    text-decoration: none;
  }

`;
